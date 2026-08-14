"use client";

import { useEffect, useState } from "react";
import { MARKER_COLOURS, type JumpItem } from "./sectionIds";

export type { JumpItem };

export function JumpTo({ items }: { items: JumpItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!items.length) return;
    const nodes = items
      .map((i) => document.getElementById(i.id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    // Track the heading nearest the top of the viewport rather than whichever
    // happens to intersect, so the rail doesn't jump around on fast scrolls.
    const onScroll = () => {
      let current: string | null = null;
      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= 140) current = node.id;
      }
      setActive(current ?? nodes[0].id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  if (items.length < 2) return null;

  const list = (
    <ol className="space-y-1">
      {items.map((item, i) => {
        const isActive = active === item.id;
        const colour = item.colour ?? "#5b6f7d";
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={() => setOpen(false)}
              className={[
                "group flex items-start gap-2.5 rounded-sm py-1.5 pl-1 pr-2 text-sm leading-snug transition-colors",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3a7d78]",
                item.kind === "group" ? "pl-4" : "",
                isActive
                  ? "text-[#142028]"
                  : "text-[#5b6f7d] hover:text-[#142028]",
              ].join(" ")}
            >
              <span
                aria-hidden
                className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full transition-transform"
                style={{
                  background: isActive ? colour : "#c8d3d3",
                  transform: isActive ? "scale(1.5)" : "scale(1)",
                }}
              />
              <span
                className={
                  item.kind === "dive"
                    ? "font-display text-[0.95rem]"
                    : item.kind === "opening"
                      ? "eyebrow text-[0.7rem]"
                      : ""
                }
              >
                {item.label}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      {/* Wide screens: a quiet rail in the margin beside the content. Positioned
          in globals.css alongside the past-editions rail, since the two share
          the same centre-line maths. */}
      <nav data-jump-nav aria-label="Jump to a section">
        <p className="eyebrow mb-3 text-[0.7rem]">Jump to</p>
        {list}
      </nav>

      {/* Narrow screens: a pinned control that opens the same list. Flips at the
          same breakpoint as the rail, or there would be a band with neither. */}
      <div className="2xl:hidden fixed bottom-5 right-5 z-40">
        {open ? (
          <div className="paper p-4 pr-5 mb-2 max-h-[65vh] overflow-y-auto shadow-lg w-64">
            <nav aria-label="Jump to a section">
              <p className="eyebrow mb-3 text-[0.7rem]">Jump to</p>
              {list}
            </nav>
          </div>
        ) : null}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="ml-auto flex items-center gap-2 rounded-full bg-[#142028] px-4 py-2.5 text-sm text-[#f6f4ef] shadow-lg transition-colors hover:bg-[#3a7d78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3a7d78]"
        >
          {open ? "Close" : "Jump to"}
        </button>
      </div>
    </>
  );
}
