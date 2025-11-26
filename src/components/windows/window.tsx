import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { Rnd } from "react-rnd";
import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
  title: string;
  defaultPosition: { x: number; y: number };
  defaultSize: { width: number; height: number };
  onClose: () => void;
}

export function Window({
  children,
  title,
  defaultPosition,
  defaultSize,
  onClose,
}: Props) {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const handleMinimized = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <Rnd
      default={{
        ...defaultSize,
        ...defaultPosition,
      }}
    >
      <div className="bg-card border">
        <div className="px-2 py-1 text-sm flex justify-between items-center border-b">
          <p>{title}</p>
          <div className="flex gap-2 items-center">
            <Button size="icon-sm" variant="ghost" onClick={handleMinimized}>
              {isMinimized ? (
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
        {isMinimized ? (
          <div className="h-5" />
        ) : (
          <div className="p-5">{children}</div>
        )}
      </div>
    </Rnd>
  );
}
