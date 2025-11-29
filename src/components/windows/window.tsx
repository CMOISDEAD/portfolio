import { Minus, Plus, X } from "lucide-react";
import { useCallback, useEffect, useReducer } from "react";
import { Rnd } from "react-rnd";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  title: string;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number | string; height: number | string };
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
  onClose,
  isMobile = false,
}: Props) {
  const [state, dispatch] = useReducer(windowReducer, {
    position: defaultPosition,
    size: defaultSize,
    previousSize: defaultSize,
    isMinimized: false,
  });

  useEffect(() => {
    dispatch({
      type: "RESET",
      payload: { position: defaultPosition, size: defaultSize },
    });
  }, [isMobile, defaultPosition, defaultSize]);

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
      enableResizing={!isMobile}
      className={isMobile ? "touch-none" : ""}
      bounds="parent"
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
    >
      <div className="bg-card border flex flex-col h-full">
        <div className="px-3 text-sm flex justify-between items-center border-b select-none">
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
        </div>
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
