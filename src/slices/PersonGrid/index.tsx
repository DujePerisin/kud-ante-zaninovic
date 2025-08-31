import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { ButtonLink } from "@/components/ButtonLink";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export type PersonGridProps = SliceComponentProps<Content.PersonGridSlice>;


const PersonGrid: FC<PersonGridProps> = ({ slice }) => {
  return (
    <Bounded className="bg-white py-16 px-6 text-neutral-900">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        <PrismicNextImage field={slice.primary.image} />
      </div>
      <RevealText
        id="person-grid-heading"
        field={slice.primary.bio}
        as="h2"
        className="font-display text-4xl md:text-5xl mb-10 text-center"
        align="center"
        staggerAmount={0.1}
        duration={0.5}
      />
      <FadeIn
        className="translate-y-2 text-sm font-light tracking-[.2em] uppercase"
        vars={{ duration: 0.5 }}
      >
        {slice.primary.name}
      </FadeIn>
      <FadeIn
        className="translate-y-2 text-sm font-light tracking-[.2em] uppercase"
        vars={{ duration: 0.5 }}
      >
        {slice.primary.role}
      </FadeIn>
      {slice.primary.socialmedia1.map((link) => (
        <PrismicNextLink
          key={link.key}
          field={link}
        />
      ))}
      {slice.primary.socialmedia2.map((link) => (
        <PrismicNextLink
          key={link.key}
          field={link}
        />
      ))}
    </Bounded>
  );
}

export default PersonGrid;