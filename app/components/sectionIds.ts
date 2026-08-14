// Shared between the server-rendered edition body and the client-side jump nav,
// so both agree on anchor ids. No fs imports here: this must stay client-safe.

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
