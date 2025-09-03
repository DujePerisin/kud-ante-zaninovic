"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  isFilled,
  type ContentRelationshipField,
  type LinkField,
} from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { FragranceDisplay } from "./FragranceDisplay";

function relId(
  rel: ContentRelationshipField | null | undefined
): string | undefined {
  return isFilled.contentRelationship(rel) ? rel.id : undefined;
}

function isLinkField(val: unknown): val is LinkField {
  return !!val && typeof val === "object" && "link_type" in (val as Record<string, unknown>);
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
  const [showCount, setShowCount] = useState(2); // show N at a time -----------------------------------------------------------
  const userInteractedRef = useRef(false);

  const byId = useMemo(() => {
    const m = new Map<string, FragranceLite>();
    for (const f of fragranceData) m.set(f.id, f);
    return m;
  }, [fragranceData]);

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

  const displayedDocs = useMemo(
    () => visibleDocs.slice(0, showCount),
    [visibleDocs, showCount]
  );

  const firstRef = useRef<HTMLDivElement>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (!userInteractedRef.current) return;
    if (!displayedDocs.length) return;
    firstRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 300);
    return () => clearTimeout(t);
  }, [selectedProfile, displayedDocs.length]);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    userInteractedRef.current = true;
    setSelectedProfile(e.target.value);
    setShowCount(3); // reset pagination on filter change --------------------------------------------------------------------
  };

  const rawButtons = (slice.primary as Record<string, unknown>)["button"];
  const buttons: Array<{ field: LinkField; className?: string }> = [];
  if (Array.isArray(rawButtons)) {
    for (const item of rawButtons) {
      if (isLinkField(item)) {
        buttons.push({ field: item });
      } else if (item && typeof item === "object") {
        const rec = item as Record<string, unknown>;
        const lf = rec["link"];
        if (isLinkField(lf)) {
          const className = typeof rec["variant"] === "string" ? (rec["variant"] as string) : undefined;
          buttons.push({ field: lf, className });
        }
      }
    }
  }

  return (
    <div className="mt-8 md:mt-12 md:grid md:grid-cols-[240px,1fr] md:gap-8">
      <aside className="mb-6 flex justify-center md:mb-0">
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

      {/* Cards (in batches of N) */}
      <div className="grid grid-cols-1 gap-12">
        {displayedDocs.map((doc, idx) => (
          <div
            key={doc.id + selectedProfile}
            ref={idx === 0 ? firstRef : undefined}
            className={`scroll-mt-24 transition-transform duration-300 ${pulse && idx === 0 ? "scale-[1.01] ring-2 ring-white/30 rounded-2xl" : ""
              }`}
          >
            <FragranceDisplay doc={doc} priority={idx === 0} />
          </div>
        ))}

        {/* Load more (next N) */}
        {showCount < visibleDocs.length && (
          <div className="mt-2 flex justify-center">
            <button
              onClick={() =>
                setShowCount((n) => Math.min(n + 3, visibleDocs.length))
              }
              className="rounded-md border border-white/20 px-4 py-2 text-sm uppercase tracking-wide hover:bg-white/10"
            >
              Učitaj još
            </button>
          </div>
        )}

        {buttons.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {buttons.map((b, i) => {
              const isLast = i === buttons.length - 1;

              const keyFromField =
                ("id" in b.field && typeof b.field.id === "string" && b.field.id) ||
                ("url" in b.field && typeof b.field.url === "string" && b.field.url) ||
                String(i);

              const comfyBorder =
                "inline-flex w-auto items-center whitespace-nowrap rounded-lg border border-white/30 px-4 py-2 text-sm leading-none hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30";

              return (
                <PrismicNextLink
                  key={keyFromField}
                  field={b.field}
                  className={`${b.className ?? ""} ${isLast ? comfyBorder : ""}`.trim()}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
