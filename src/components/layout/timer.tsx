import { useEffect, useState } from "react";

export function Timer() {
  // null until mounted so prerendered HTML and hydration agree
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setTime(new Date());
    const timer = setInterval(tick, 1000);
    const first = setTimeout(tick, 0);

    return () => {
      clearInterval(timer);
      clearTimeout(first);
    };
  }, []);

  return (
    <p className="text-sm text-muted-foreground tabular-nums">
      [
      {time
        ? time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })
        : "--:--:--"}
      ]
    </p>
  );
}
