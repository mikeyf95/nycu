import Link from "next/link";
import { getEditionsByYear } from "@/lib/editions";

// A rail of every past edition, grouped into collapsible years. Built on native
// <details> so it opens and closes without JavaScript - no client component, and
// it still works if hydration never happens.
export function PastEditions({ currentSlug }: { currentSlug?: string }) {
  const years = getEditionsByYear();
  if (!years.length) return null;

  // Open the year holding whatever is being read; on the home page that resolves
  // to the newest year, since the latest edition is what it renders.
  const openYear =
    years.find((y) => y.editions.some((e) => e.slug === currentSlug))?.year ??
    years[0].year;

  return (
    <aside className="editions-rail" aria-label="Past editions">
      <p className="eyebrow editions-rail-label">Past editions</p>
      {years.map((y) => (
        <details key={y.year} open={y.year === openYear}>
          <summary>
            <span className="font-display">{y.year}</span>
            <span className="editions-rail-count">{y.editions.length}</span>
          </summary>
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
        </details>
      ))}
    </aside>
  );
}
