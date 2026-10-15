import { Minus, Plus, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { Rnd, type RndDragCallback, type RndResizeCallback } from "react-rnd";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsClient } from "@/hooks/use-client";
import type { Rect } from "@/components/windows/layout";

interface Props {
  children: React.ReactNode;
  title: string;
  /** Computed by the home page from the container size; null until measured */
  layout: Rect | null;
  onClose: () => void;
  isMobile?: boolean;
}

interface WindowState {
  position: { x: number; y: number };
  size: { width: number | string; height: number | string };
  previousSize: { width: number | string; height: number | string };
  isMinimized: boolean;
  isPositioned: boolean;
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

// Title bar (32px buttons + borders)
const MINIMIZED_HEIGHT = 35;
const FALLBACK_SIZE = { width: 380, height: 300 };

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
        isPositioned: true,
      };

    default:
      return state;
  }
}

// Shared stacking order: the last window touched goes on top
let topZIndex = 10;

const PresenceContext = createContext({ open: true, onExited: () => {} });

/** Keeps its window mounted until the exit animation has finished. */
export function WindowPresence({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  const [rendered, setRendered] = useState(open);
  if (open && !rendered) setRendered(true);

  const onExited = useCallback(() => setRendered(false), []);

  if (!rendered) return null;
  return (
    <PresenceContext.Provider value={{ open, onExited }}>
      {children}
    </PresenceContext.Provider>
  );
}

export function Window({
  children,
  title,
  layout,
  onClose,
  isMobile = false,
}: Props) {
  const { open, onExited } = useContext(PresenceContext);
  const frameRef = useRef<HTMLDivElement>(null);
  const isClient = useIsClient();
  const [zIndex, setZIndex] = useState(() => ++topZIndex);
  const bringToFront = (e: { target: EventTarget | null }) => {
    if ((e.target as Element | null)?.closest?.("button")) return;
    if (zIndex !== topZIndex) setZIndex(++topZIndex);
  };

  // The container is unknown while prerendering / hydrating, so start from a
  // deterministic position and place the window before the first paint.
  const [state, dispatch] = useReducer(windowReducer, {
    position: { x: 0, y: 0 },
    size: FALLBACK_SIZE,
    previousSize: FALLBACK_SIZE,
    isMinimized: false,
    isPositioned: false,
  });

  const { x, y, width, height } = layout ?? {};
  useLayoutEffect(() => {
    if (x === undefined || y === undefined || !width || !height) return;
    dispatch({
      type: "RESET",
      payload: { position: { x, y }, size: { width, height } },
    });
  }, [x, y, width, height]);

  // Wait for hydration so windows closed by default on mobile never flash
  const [shown, setShown] = useState(false);
  if (open && isClient && state.isPositioned && !shown) setShown(true);

  // Never shown or no exit animation (e.g. reduced motion): unmount right away
  useEffect(() => {
    if (!open && (!shown || !frameRef.current?.getAnimations().length)) {
      onExited();
    }
  }, [open, shown, onExited]);

  const handleMinimize = useCallback(() => {
    dispatch({ type: "TOGGLE_MINIMIZE" });
  }, []);

  const handleDragStop = useCallback<RndDragCallback>((_e, d) => {
    dispatch({ type: "SET_POSITION", payload: { x: d.x, y: d.y } });
  }, []);

  const handleResizeStop = useCallback<RndResizeCallback>(
    (_e, _dir, ref, _delta, pos) => {
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
      bounds="parent"
      // Only the title bar drags, so taps on buttons, links and scrolling
      // content keep working on touch screens
      dragHandleClassName="window-drag-handle"
      cancel="button, a"
      minWidth={200}
      minHeight={MINIMIZED_HEIGHT}
      style={{ zIndex }}
      onMouseDown={bringToFront}
      onTouchStart={bringToFront}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      className={cn(!shown && "opacity-0", !open && "pointer-events-none")}
    >
      <div
        ref={frameRef}
        onAnimationEnd={(e) => {
          if (e.target === e.currentTarget && !open) onExited();
        }}
        className={cn(
          "bg-background border flex flex-col h-full duration-200 motion-reduce:animate-none",
          shown &&
            (open
              ? "animate-in fade-in zoom-in-95"
              : "animate-out fade-out zoom-out-95 fill-mode-forwards"),
        )}
      >
        <header className="window-drag-handle text-sm flex justify-between items-center border-b select-none cursor-move touch-none">
          <div className="px-3 flex items-center gap-4 min-w-0">
            <div className="size-2 bg-muted-foreground hover:bg-foreground" />
            <p className="font-medium truncate">{title}</p>
          </div>
          <div className="flex gap-1 shrink-0 cursor-default">
            <Button
              size="icon-sm"
              variant="ghost"
              onClick={handleMinimize}
              aria-label={state.isMinimized ? "Restore window" : "Minimize window"}
            >
              {state.isMinimized ? (
                <Plus className="size-4" />
              ) : (
                <Minus className="size-4" />
              )}
            </Button>
            <Button
              size="icon-sm"
              variant="ghost"
              onClick={onClose}
              aria-label="Close window"
            >
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
            className={cn("flex items-center min-h-full", isMobile ? "p-4" : "p-3")}
          >
            {children}
          </div>
        </div>
      </div>
    </Rnd>
  );
}
