import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FlashIcon,
  ChartColumnIcon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons";
import { Reveal } from "./Reveal";
import { CodeWindow } from "./CodeWindow";

const STATS = [
  {
    icon: FlashIcon,
    value: "37%",
    label: "USER ATTRACTION",
    desc: "Increase after launching AskAI on mobile.",
  },
  {
    icon: ChartColumnIcon,
    value: "74%",
    label: "LESS VIZ EFFORT",
    desc: "Lower implementation effort and LOC.",
  },
  {
    icon: SourceCodeIcon,
    value: "18%",
    label: "LESS NETWORK CODE",
    desc: "Through a standardized GraphQL layer.",
  },
];

export function ImpactNew() {
  return (
    <section className="relative w-full overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.5fr)] lg:gap-14">
        {/* ── LEFT ── */}
        <Reveal>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent text-shimmer">
            Measured Impact
          </p>

          <h2 className="mt-5 font-display font-black uppercase leading-[0.92] tracking-[-0.02em] text-[clamp(2.5rem,6vw,4.75rem)]">
            <span className="block text-white">Shipping</span>
            <span className="block text-white">Mobile</span>
            <span className="block text-accent text-shimmer">That Performs.</span>
          </h2>

          <p className="mt-7 max-w-md font-sans text-lg leading-relaxed text-zinc-400">
            Native products, architecture, and engineering systems tied to
            concrete gains in adoption, speed, reliability, and delivery.
          </p>

          {/* Stat cards */}
          <div className="mt-9 grid grid-cols-1 gap-3 min-[460px]:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-line bg-white/[0.02] p-5"
              >
                <HugeiconsIcon
                  icon={stat.icon}
                  className="h-6 w-6 text-accent"
                  strokeWidth={1.6}
                />
                <p className="mt-6 font-sans text-3xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-accent text-shimmer">
                  {stat.label}
                </p>
                <p className="mt-2.5 font-sans text-[13px] leading-snug text-zinc-500">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Logos */}
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-zinc-500">
            <span className="font-sans text-sm font-semibold">New Relic</span>
            <span className="h-4 w-px bg-line-strong" />
            <span className="font-sans text-sm font-semibold">Yulu Bikes</span>
            <span className="h-4 w-px bg-line-strong" />
            <span className="font-sans text-sm font-semibold">RAAHO</span>
          </div>
        </Reveal>

        {/* ── RIGHT ── */}
        <Reveal delay={120}>
          <CodeWindow />
        </Reveal>
      </div>
    </section>
  );
}
