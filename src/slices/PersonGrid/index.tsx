import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type PersonGridProps = SliceComponentProps<Content.PersonGridSlice>;

const PersonGrid: FC<PersonGridProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-white px-6 py-16 text-neutral-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col">
            <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
              <PrismicNextImage
                field={slice.primary.image}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover"
                alt=""
              />
            </div>

            <FadeIn
              className="text-sm font-light uppercase tracking-[.2em]"
              vars={{ duration: 0.5 }}
            >
              {slice.primary.name}
            </FadeIn>

            <FadeIn
              className="mt-1 text-sm font-light uppercase tracking-[.2em] text-neutral-500"
              vars={{ duration: 0.5, delay: 0.05 }}
            >
              {slice.primary.role}
            </FadeIn>

            <RevealText
              id="person-grid-bio"
              field={slice.primary.bio}
              as="p"
              className="mt-4 text-left text-sm leading-relaxed"
              align="start"
              staggerAmount={0}
              duration={0}
            />

            <div className="mt-6 flex flex-wrap gap-3">
              {slice.primary.socialmedia1?.map((link) => (
                <PrismicNextLink
                  key={link.key}
                  field={link}
                  className="inline-flex items-center rounded-md border border-neutral-200 px-3 py-1.5 text-sm hover:bg-neutral-100"
                />
              ))}
              {slice.primary.socialmedia2?.map((link) => (
                <PrismicNextLink
                  key={link.key}
                  field={link}
                  className="inline-flex items-center rounded-md border border-neutral-200 px-3 py-1.5 text-sm hover:bg-neutral-100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default PersonGrid;
