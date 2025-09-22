
import React, { useState } from "react";
type Item = { q: string; a: string; };
export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-white/5 rounded-2xl border border-white/10 bg-white/[0.04]">
      {items.map((it, i) => (
        <div key={i}>
          <button onClick={() => setOpen(open === i ? null : i)} className="w-full px-6 py-4 text-left font-medium hover:bg-white/5">{it.q}</button>
          {open === i && <div className="px-6 pb-5 text-neutral-300">{it.a}</div>}
        </div>
      ))}
    </div>
  );
}
