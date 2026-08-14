import { getAllEditions, getEditionsByYear } from "@/lib/editions";
import { ArchiveLink } from "../components/EditionRender";

export const metadata = {
  title: "Archive \u00B7 News You Can Use",
  description: "Every edition of News You Can Use, from the beginning.",
};

export default function ArchivePage() {
  const editions = getAllEditions();
  const byYear = getEditionsByYear();

  return (
    <main className="pb-20">
      <section className="px-6 pt-10 md:pt-16 pb-10">
        <div className="max-w-5xl mx-auto">
          <p className="eyebrow mb-3">Archive</p>
          <h1 className="font-display text-4xl md:text-5xl text-[#142028] leading-tight tracking-tight">
            Every edition, <span className="font-display-italic text-[#3a7d78]">from the beginning</span>
          </h1>
          <p className="mt-5 text-lg text-[#1f2a33] leading-relaxed max-w-3xl">
            A fortnightly field note on legal AI - the market, the research, the practitioners.
            {" "}{editions.length} editions and counting.
          </p>
        </div>
      </section>
      <section className="px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          {byYear.map((yr) => (
            <div key={yr.year}>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-display text-3xl md:text-4xl text-[#142028] tracking-tight">
                  {yr.year}
                </h2>
                <div className="flex-1 brush-rule" aria-hidden />
                <span className="eyebrow text-sm">
                  {yr.editions.length} edition{yr.editions.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {yr.editions.map((e) => (
                  <ArchiveLink key={e.slug} edition={e} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
