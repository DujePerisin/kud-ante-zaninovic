import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { FC } from "react";
import { PrismicNextImage } from "@prismicio/next";

export type CrewHeroProps = SliceComponentProps<Content.CrewHeroSlice>;

const CrewHero: FC<CrewHeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen overflow-hidden bg-neutral-950"
    >
      <FadeIn vars={{ scale: 1, opacity: .5 }} className="absolute inset-0 motion-safe:scale-125 opacity-0">
        <PrismicNextImage field={slice.primary.poster_image} alt="" priority fill className="object-cover motion-reduce:opacity-50 h-24/12" />
      </FadeIn>
      <div className="flex relative h-screen flex-col justify-center">
        {/* <FadeIn vars={{ delay: 0.8, duration: 0.8 }}>
          <p className="text-sm font-semibold tracking-[0.5em] uppercase">kud</p>
        </FadeIn>
        <FadeIn vars={{ delay: 0.8, duration: 0.8 }}>
          <p className="text-sm font-semibold tracking-[0.5em] uppercase">ante zaninović</p>
        </FadeIn> */}
        <RevealText
          field={slice.primary.heading}
          id="crewhero-heading"
          className="max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl font-display"
          staggerAmount={.2}
          duration={1.7}
          as="h1"
        />
        <FadeIn className="mt-6 max-w-md text-lg text-neutral-100 translate-y-8" vars={{ delay: 1, duration: 1.3 }}>
          <PrismicRichText field={slice.primary.tagline} />
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default CrewHero;