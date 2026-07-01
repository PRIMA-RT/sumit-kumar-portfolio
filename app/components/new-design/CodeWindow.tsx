import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SourceCodeIcon,
  ShieldEnergyIcon,
  DashboardSpeed02Icon,
  TradeUpIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

/* Resume-inspired MVI refactor: scattered UI state to one state model. */
type Status = "ctx" | "del" | "add";
type Line = { num: number; status: Status; code: string };

const OLD_LINES: Line[] = [
  { num: 1, status: "ctx", code: "class LogsViewModel : ViewModel() {" },
  { num: 2, status: "del", code: "  val loading = MutableStateFlow(false)" },
  { num: 3, status: "del", code: "  val logs = MutableStateFlow(emptyList<Log>())" },
  { num: 4, status: "del", code: "  val error = MutableStateFlow<String?>(null)" },
  { num: 5, status: "ctx", code: "" },
  { num: 6, status: "ctx", code: "  fun refresh() = viewModelScope.launch {" },
  { num: 7, status: "del", code: "    loading.value = true" },
  { num: 8, status: "ctx", code: "" },
  { num: 9, status: "del", code: "    logs.value = repository.streamLogs()" },
  { num: 10, status: "del", code: "    loading.value = false" },
  { num: 11, status: "ctx", code: "  }" },
  { num: 12, status: "ctx", code: "" },
  { num: 13, status: "ctx", code: "}" },
];

const NEW_LINES: Line[] = [
  { num: 1, status: "ctx", code: "class LogsViewModel : ViewModel() {" },
  { num: 2, status: "add", code: "  private val _state = MutableStateFlow(LogsState())" },
  { num: 3, status: "add", code: "  val state = _state.asStateFlow()" },
  { num: 4, status: "ctx", code: "" },
  { num: 5, status: "ctx", code: "" },
  { num: 6, status: "ctx", code: "  fun onIntent(intent: LogsIntent) = reduce(intent) {" },
  { num: 7, status: "add", code: "    copy(isLoading = true)" },
  { num: 8, status: "ctx", code: "" },
  { num: 9, status: "add", code: "    copy(logs = repository.streamLogs(), isLoading = false)" },
  { num: 10, status: "ctx", code: "  }" },
  { num: 11, status: "ctx", code: "" },
  { num: 12, status: "ctx", code: "" },
  { num: 13, status: "ctx", code: "}" },
];

const FEATURES = [
  {
    icon: ShieldEnergyIcon,
    color: "text-accent",
    title: "Predictable State",
    desc: "Unidirectional MVI data flow",
  },
  {
    icon: DashboardSpeed02Icon,
    color: "text-accent",
    title: "Testable Events",
    desc: "Intent-driven behavior and assertions",
  },
  {
    icon: TradeUpIcon,
    color: "text-accent",
    title: "Reusable Architecture",
    desc: "Less repeated feature boilerplate",
  },
];

/* ── Minimal tokenizer ─────────────────────────────────────────────────── */
const KEYWORDS = new Set([
  "class",
  "private",
  "val",
  "fun",
]);
const TOKEN_RE =
  /('[^']*'|"[^"]*")|([A-Za-z_$][A-Za-z0-9_$]*)|(\s+)|([^\sA-Za-z0-9_$])/g;

function tokenize(code: string) {
  const out: { t: string; c: string }[] = [];
  let m: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(code))) {
    if (m[1]) out.push({ t: m[1], c: "text-[#98c379]" });
    else if (m[2]) {
      if (KEYWORDS.has(m[2])) out.push({ t: m[2], c: "text-[#c586c0]" });
      else if (/^[A-Z]/.test(m[2])) out.push({ t: m[2], c: "text-[#4ec9b0]" });
      else out.push({ t: m[2], c: "text-[#c9d1d9]" });
    } else if (m[3]) out.push({ t: m[3], c: "" });
    else out.push({ t: m[4], c: "text-[#6b7280]" });
  }
  return out;
}

function Pane({
  lines,
  variant,
  className = "",
}: {
  lines: Line[];
  variant: "old" | "new";
  className?: string;
}) {
  const isOld = variant === "old";
  return (
    <div className={`min-w-0 ${className}`}>
      {/* BEFORE / AFTER badge */}
      <div className="px-4 pb-3 sm:px-5">
        <span
          className={`inline-block rounded px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] ${
            isOld
              ? "bg-[#f85149]/12 text-[#f85149]"
              : "bg-[#3fb950]/12 text-[#3fb950]"
          }`}
        >
          {isOld ? "Before" : "After"}
        </span>
      </div>

      <div className="overflow-x-auto">
        <pre className="w-max min-w-full font-mono text-[11px] leading-[1.95] sm:text-[12.5px]">
          {lines.map((line) => {
            const isChange =
              (isOld && line.status === "del") ||
              (!isOld && line.status === "add");
            const rowBg = isChange
              ? isOld
                ? "bg-[#f85149]/[0.1]"
                : "bg-[#3fb950]/[0.1]"
              : "";
            const numColor = isChange
              ? isOld
                ? "text-[#f85149]"
                : "text-[#3fb950]"
              : "text-zinc-600";
            return (
              <div key={line.num} className={`flex ${rowBg}`}>
                <span
                  className={`w-9 shrink-0 select-none pr-3 text-right tabular-nums ${numColor}`}
                >
                  {String(line.num).padStart(2, "0")}
                </span>
                <code className="whitespace-pre pr-6 pl-3">
                  {line.code === ""
                    ? " "
                    : tokenize(line.code).map((tok, i) => (
                        <span key={i} className={tok.c}>
                          {tok.t}
                        </span>
                      ))}
                </code>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
}

export function CodeWindow({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* glow halo behind the window */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[20px] bg-gradient-to-r from-[#a855f7]/40 via-accent/30 to-[#a855f7]/40 opacity-60 blur-md"
      />

      <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#0a0a0c] shadow-2xl shadow-black/70">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5">
            <HugeiconsIcon
              icon={SourceCodeIcon}
              className="h-5 w-5 shrink-0 text-accent"
              strokeWidth={1.6}
            />
            <span className="truncate font-sans text-sm font-semibold text-white">
              LogsViewModel.kt
            </span>
          </div>
          <span className="flex shrink-0 items-center gap-2 rounded-full border border-accent/40 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-accent">
            Impact
            <span className="h-1.5 w-1.5 rounded-full bg-[#3fb950]" />
          </span>
        </div>

        {/* Diff body — split on md+, single (new) pane on mobile */}
        <div className="relative flex pt-4">
          <Pane
            lines={OLD_LINES}
            variant="old"
            className="hidden flex-1 border-r border-white/[0.07] pb-5 md:block"
          />
          <Pane lines={NEW_LINES} variant="new" className="flex-1 pb-5" />

          {/* center nav chevron */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#16161a] text-zinc-300 shadow-lg">
              <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
            </span>
          </div>
        </div>

        {/* Feature footer */}
        <div className="grid grid-cols-1 gap-6 border-t border-white/[0.07] p-6 sm:grid-cols-3 sm:gap-5 sm:p-7">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <HugeiconsIcon
                icon={f.icon}
                className={`mt-0.5 h-6 w-6 shrink-0 ${f.color}`}
                strokeWidth={1.6}
              />
              <div>
                <p className="font-sans text-sm font-bold text-white">
                  {f.title}
                </p>
                <p className="mt-1 font-sans text-[13px] leading-snug text-zinc-500">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
