"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { isFilled, type ContentRelationshipField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { FragranceDisplay } from "./FragranceDisplay";

/** Safe helper: extract id from a content relationship */
function relId(
  rel: ContentRelationshipField | null | undefined
): string | undefined {
  return isFilled.contentRelationship(rel) ? rel.id : undefined;
}

type FragranceLite = {
  id: string;
  scent_profile: string;
  titleText?: string;
  doc: Content.FragranceDocument;
};

type Props = {
  slice: SliceComponentProps<Content.FragranceListSlice>["slice"];
  fragranceData: FragranceLite[];
  profiles: string[];
};

export default function FragranceListClient({
  slice,
  fragranceData,
  profiles,
}: Props) {
  const [selectedProfile, setSelectedProfile] = useState("all");
  const userInteractedRef = useRef(false);

  // O(1) lookups
  const byId = useMemo(() => {
    const m = new Map<string, FragranceLite>();
    for (const f of fragranceData) m.set(f.id, f);
    return m;
  }, [fragranceData]);

  // Which docs are visible for current filter
  const visibleDocs = useMemo(() => {
    const items = slice.primary.fragrances ?? [];
    const out: Content.FragranceDocument[] = [];
    for (const it of items) {
      const id = relId(it.fragrance);
      if (!id) continue;
      const found = byId.get(id);
      if (!found) continue;
      if (selectedProfile === "all" || found.scent_profile === selectedProfile) {
        out.push(found.doc);
      }
    }
    return out;
  }, [slice.primary.fragrances, byId, selectedProfile]);

  // Snap-on: only after user changes the filter (not on first render)
  const firstRef = useRef<HTMLDivElement>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (!userInteractedRef.current) return;     // skip initial load
    if (!visibleDocs.length) return;
    firstRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 300);
    return () => clearTimeout(t);
  }, [selectedProfile, visibleDocs.length]);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    userInteractedRef.current = true;
    setSelectedProfile(e.target.value);
  };

  return (
    <div className="mt-8 md:mt-12 md:grid md:grid-cols-[240px,1fr] md:gap-8">
      {/* Left column on md+, centered on small */}
      <aside className="mb-6 flex justify-center md:mb-0 md:justify-center-safe">
        <div className="w-64">
          <select
            id="fragrance-filter"
            value={selectedProfile}
            onChange={onSelectChange}
            className="w-full rounded-md border border-neutral-600 bg-neutral-900 px-3 py-2 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            {profiles.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </aside>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 gap-12">
        {visibleDocs.map((doc, idx) => (
          <div
            key={doc.id + selectedProfile}
            ref={idx === 0 ? firstRef : undefined}
            className={`scroll-mt-24 transition-transform duration-300 ${
              pulse && idx === 0 ? "scale-[1.01] ring-2 ring-white/30 rounded-2xl" : ""
            }`}
          >
            <FragranceDisplay doc={doc} priority={idx === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
