import { Bounded } from "@/components/Bounded";
import { RevealText } from "@/components/RevealText";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Content,
  isFilled,
  asText,
  type ContentRelationshipField,
} from "@prismicio/client";
import { createClient } from "@/prismicio";
import FragranceListClient from "./FragranceListClient";

export type FragranceListProps = SliceComponentProps<Content.FragranceListSlice>;

function relId(
  rel: ContentRelationshipField | null | undefined
): string | undefined {
  return isFilled.contentRelationship(rel) ? rel.id : undefined;
}

type FragranceDocData = Content.FragranceDocument["data"] & {
  scent_profile?: string | null;
};

export default async function FragranceList({ slice }: FragranceListProps) {
  const client = createClient();

  const items = slice.primary.fragrances ?? [];
  const ids = items
    .map((it) => relId(it.fragrance))
    .filter((id): id is string => !!id);

  const docs = ids.length
    ? await client.getAllByIDs<Content.FragranceDocument>(ids)
    : [];

  const fragranceData = docs.map((d) => {
    const data = d.data as FragranceDocData; // typed, not any
    return {
      id: d.id,
      titleText: asText(data.title),
      scent_profile: data.scent_profile ?? "Unknown",
      doc: d,
    };
  });

  const profiles = Array.from(
    new Set(fragranceData.map((f) => f.scent_profile).filter(Boolean))
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="space-y-8 bg-black py-16 text-center text-white md:py-24"
    >
      <div className="mx-auto space-y-8">
        <p className="text-sm font-light tracking-[0.2em] uppercase opacity-50">
          {slice.primary.eyebrow}
        </p>

        <RevealText
          field={slice.primary.heading}
          as="h2"
          id={`fragrance-list-heading-${slice.id}`}
          align="center"
          duration={1.5}
          staggerAmount={0.3}
          className="font-display text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl"
        />

        <div className="mx-auto max-w-2xl text-balance text-lg text-gray-300">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <FragranceListClient
          slice={slice}
          fragranceData={fragranceData}
          profiles={["all", ...profiles]}
        />
      </div>
    </Bounded>
  );
}
