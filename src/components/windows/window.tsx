import { Minus, Plus, X } from "lucide-react";
import { useCallback, useEffect, useReducer } from "react";
import { Rnd } from "react-rnd";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Anchor =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

interface Props {
  children: React.ReactNode;
  title: string;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number | string; height: number | string };
  anchor?: Anchor;
  offset?: { x: number; y: number };
  onClose: () => void;
  isMobile?: boolean;
}

interface WindowState {
  position: { x: number; y: number };
  size: { width: number | string; height: number | string };
  previousSize: { width: number | string; height: number | string };
  isMinimized: boolean;
}

type WindowAction =
  | { type: "SET_POSITION"; payload: { x: number; y: number } }
  | {
      type: "SET_SIZE";
      payload: { width: number | string; height: number | string };
    }
  | { type: "TOGGLE_MINIMIZE" }
  | {
      type: "RESET";
      payload: {
        position: { x: number; y: number };
        size: { width: number | string; height: number | string };
      };
    };

const MINIMIZED_HEIGHT = 80;

// Calcular posición segun anchor
function computeAnchoredPosition(
  anchor: Anchor,
  offset: { x: number; y: number },
  size: { width: number | string; height: number | string },
) {
  const w = window.innerWidth;
  const h = window.innerHeight;

  const width =
    typeof size.width === "string" ? parseInt(size.width) : size.width;
  const height =
    typeof size.height === "string" ? parseInt(size.height) : size.height;

  switch (anchor) {
    case "bottom-left":
      return { x: offset.x, y: h - height - offset.y };

    case "bottom-right":
      return { x: w - width - offset.x, y: h - height - offset.y };

    case "top-right":
      return { x: w - width - offset.x, y: offset.y };

    case "center":
      return { x: (w - width) / 2, y: (h - height) / 2 };

    case "top-left":
    default:
      return { x: offset.x, y: offset.y };
  }
}

// Reducer
function windowReducer(state: WindowState, action: WindowAction): WindowState {
  switch (action.type) {
    case "SET_POSITION":
      return { ...state, position: action.payload };

    case "SET_SIZE":
      return { ...state, size: action.payload };

    case "TOGGLE_MINIMIZE":
      if (state.isMinimized) {
        return {
          ...state,
          size: state.previousSize,
          isMinimized: false,
        };
      }
      return {
        ...state,
        previousSize: state.size,
        size: { ...state.size, height: MINIMIZED_HEIGHT },
        isMinimized: true,
      };

    case "RESET":
      return {
        position: action.payload.position,
        size: action.payload.size,
        previousSize: action.payload.size,
        isMinimized: false,
      };

    default:
      return state;
  }
}

export function Window({
  children,
  title,
  defaultPosition = { x: 20, y: 20 },
  defaultSize = { width: 380, height: 300 },
  anchor,
  offset = { x: 20, y: 20 },
  onClose,
  isMobile = false,
}: Props) {
  const initialPosition = anchor
    ? computeAnchoredPosition(anchor, offset, defaultSize)
    : defaultPosition;

  const [state, dispatch] = useReducer(windowReducer, {
    position: initialPosition,
    size: defaultSize,
    previousSize: defaultSize,
    isMinimized: false,
  });

  // RESET al cambiar tamaño móvil, anchor, size, etc.
  useEffect(() => {
    const newPosition = anchor
      ? computeAnchoredPosition(anchor, offset, defaultSize)
      : defaultPosition;

    dispatch({
      type: "RESET",
      payload: { position: newPosition, size: defaultSize },
    });
  }, [isMobile]);

  const handleMinimize = useCallback(() => {
    dispatch({ type: "TOGGLE_MINIMIZE" });
  }, []);

  const handleDragStop = useCallback((_e: any, d: { x: number; y: number }) => {
    dispatch({ type: "SET_POSITION", payload: { x: d.x, y: d.y } });
  }, []);

  const handleResizeStop = useCallback(
    (
      _e: any,
      _ref: any,
      ref: HTMLElement,
      _delta: any,
      pos: { x: number; y: number },
    ) => {
      dispatch({
        type: "SET_SIZE",
        payload: { width: ref.style.width, height: ref.style.height },
      });
      dispatch({ type: "SET_POSITION", payload: pos });
    },
    [],
  );

  return (
    <Rnd
      position={state.position}
      size={state.size}
      // enableResizing={!isMobile}
      bounds="parent"
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
    >
      <div className="bg-background border flex flex-col h-full">
        <header className="px-3 text-sm flex justify-between items-center border-b select-none">
          <p className="italic font-medium">{title}</p>
          <div className="flex gap-1">
            <Button size="icon-sm" variant="ghost" onClick={handleMinimize}>
              {state.isMinimized ? (
                <Plus className="size-4" />
              ) : (
                <Minus className="size-4" />
              )}
            </Button>
            <Button size="icon-sm" variant="ghost" onClick={onClose}>
              <X className="size-4" />
            </Button>
          </div>
        </header>

        <div
          className={cn(
            "flex-1 overflow-auto",
            state.isMinimized ? "hidden" : "block",
          )}
        >
          <div
            className={cn("flex items-center h-full", isMobile ? "p-4" : "p-3")}
          >
            {children}
          </div>
        </div>
      </div>
    </Rnd>
  );
}
