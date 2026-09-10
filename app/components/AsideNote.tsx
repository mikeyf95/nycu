"use client";

import { useState } from "react";
import type { Aside } from "@/lib/editions";

// A pull-out explainer that sits between deep dives. Collapsed by default: it
// frames the edition rather than reporting it, so a reader who already knows
// the terminology should be able to carry straight on down the dives.
//
// Same mechanics as the past-editions rail - a real <button> with
// aria-expanded, and the CSS grid-rows 0fr -> 1fr trick for the animation
// rather than a measured height. Not a <details>/<summary>: the jump rail
// links to this section, and content inside a closed <details> can't be
// scrolled to. The id lives on the always-visible header instead.
export function AsideNote({ aside }: { aside: Aside }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="aside-card" data-open={isOpen}>
        <button
          type="button"
          className="aside-toggle"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="aside-toggle-text">
            <span className="eyebrow aside-eyebrow" id="aside" data-jump-target>
              Aside
            </span>
            {aside.title ? (
              <span className="font-display-italic aside-title">{aside.title}</span>
            ) : null}
          </span>
          <span className="aside-chevron" data-open={isOpen} aria-hidden />
        </button>
        <div
          className="aside-panel"
          data-open={isOpen}
          // inert keeps the collapsed prose out of tab order and
          // find-in-page, matching the past-editions rail.
          inert={isOpen ? undefined : true}
        >
          <div className="aside-panel-inner">
            <div
              className="prose-ink aside-body"
              dangerouslySetInnerHTML={{ __html: aside.body }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
