// Shared between the server-rendered edition body and the client-side jump nav,
// so both agree on anchor ids. No fs imports here: this must stay client-safe.

import type { Edition } from "@/lib/editions";

export type JumpItem = {
  id: string;
  label: string;
  kind: "opening" | "dive" | "group";
  colour?: string;
};

export function sectionId(prefix: string, label: string, index: number) {
  const slug = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${prefix}-${slug || index + 1}`;
}

// Index-matched to WASH_COLOURS in EditionRender, so a deep dive's marker in the
// rail is the same hue as the colour bleed on its card.
export const MARKER_COLOURS = [
  "#3a7d78", // teal
  "#3f6a7e", // sky
  "#4e7851", // sage
  "#8a6a2a", // ochre
  "#8a4a30", // terracotta
];

// One place to build the rail's item list, so the home page (latest edition)
// and /editions/[slug] can't drift out of sync on what counts as a section.
export function buildJumpItems(edition: Edition): JumpItem[] {
  const items: JumpItem[] = [];
  if (edition.opening) {
    items.push({ id: "opening", label: "Opening", kind: "opening" });
  }
  edition.deepDives.forEach((d, i) => {
    if (!d.title) return;
    items.push({
      id: sectionId("dive", d.title, i),
      label: d.title,
      kind: "dive",
      colour: MARKER_COLOURS[i % MARKER_COLOURS.length],
    });
  });
  const seenGroups: string[] = [];
  edition.worthReading.forEach((w) => {
    if (w.group && !seenGroups.includes(w.group)) seenGroups.push(w.group);
  });
  seenGroups.forEach((g, i) => {
    items.push({ id: sectionId("wr", g, i), label: g, kind: "group" });
  });
  return items;
}
