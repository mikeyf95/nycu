"use client";

import { useState } from "react";
import Link from "next/link";
import type { Edition } from "@/lib/editions";

type YearGroup = { year: string; editions: Edition[] };

// A rail of every past edition, grouped into collapsible years. An accordion:
// collapsed by default, and opening one year closes whichever other year was
// open. Needs client state for that (a year opening another's sibling closed
// isn't expressible with independent <details> elements), so the smooth
// expand/collapse is done with the CSS grid-rows trick rather than a JS
// height measurement - no ResizeObserver, no measured-height flash.
//
// `years` is computed server-side (getEditionsByYear reads the filesystem)
// and passed in, rather than called from here - this component needs client
// state for the accordion, and a client component can't touch node:fs.
export function PastEditions({
  years,
  currentSlug,
}: {
  years: YearGroup[];
  currentSlug?: string;
}) {
  const [openYear, setOpenYear] = useState<string | null>(null);

  if (!years.length) return null;

  return (
    <aside className="editions-rail" aria-label="Past editions">
      <p className="eyebrow editions-rail-label">Past editions</p>
      {years.map((y) => {
        const isOpen = y.year === openYear;
        return (
          <div className="editions-rail-year" key={y.year}>
            <button
              type="button"
              className="editions-rail-summary"
              aria-expanded={isOpen}
              onClick={() => setOpenYear(isOpen ? null : y.year)}
            >
              <span className="font-display">{y.year}</span>
              <span className="editions-rail-count" data-open={isOpen}>
                {y.editions.length}
              </span>
            </button>
            <div
              className="editions-rail-panel"
              data-open={isOpen}
              // Grid-rows animates 0fr -> 1fr smoothly; inert keeps the links
              // out of tab order and out of find-in-page while collapsed.
              inert={isOpen ? undefined : true}
            >
              <div className="editions-rail-panel-inner">
                <ul>
                  {y.editions.map((e) => {
                    const isCurrent = e.slug === currentSlug;
                    return (
                      <li key={e.slug}>
                        <Link
                          href={`/editions/${e.slug}`}
                          aria-current={isCurrent ? "page" : undefined}
                          className={isCurrent ? "is-current" : undefined}
                        >
                          <span className="editions-rail-title">{e.title}</span>
                          {e.period ? (
                            <span className="editions-rail-period">{e.period}</span>
                          ) : null}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </aside>
  );
}
