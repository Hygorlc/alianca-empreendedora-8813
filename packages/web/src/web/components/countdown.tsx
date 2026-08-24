import { useEffect, useState } from "react";
import { EVENT } from "../lib/event";

function diff(target: number) {
  const total = Math.max(0, target - Date.now());
  return {
    total,
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total % 86_400_000) / 3_600_000),
    minutes: Math.floor((total % 3_600_000) / 60_000),
    seconds: Math.floor((total % 60_000) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown({ compact = false }: { compact?: boolean }) {
  const target = new Date(EVENT.startsAt).getTime();
  const [time, setTime] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { value: time.days, label: "dias" },
    { value: time.hours, label: "horas" },
    { value: time.minutes, label: "min" },
    { value: time.seconds, label: "seg" },
  ];

  if (time.total === 0) {
    return (
      <p className="label-xs text-gold">O encontro já aconteceu — próxima seleção em breve.</p>
    );
  }

  return (
    <div
      className={
        compact
          ? "flex items-end gap-6"
          : "grid grid-cols-4 gap-px overflow-hidden border border-gold/20 bg-gold/10"
      }
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={
            compact
              ? "flex flex-col items-center"
              : "flex flex-col items-center gap-2 bg-ink px-4 py-7 md:px-8 md:py-9"
          }
        >
          <span className="display text-3xl text-gold-light tabular-nums md:text-5xl">
            {pad(item.value)}
          </span>
          <span className="label-xs text-offwhite/45">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
