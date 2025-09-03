import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { Bounded } from "@/components/Bounded";
import { Content, isFilled } from "@prismicio/client";
import { FC } from "react";
import { PrismicNextImage } from "@prismicio/next";


export type CrewHeroProps =
  SliceComponentProps<Content.CrewHeroSlice>;

const CrewHero: FC<CrewHeroProps> = async ({ slice }) => {

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-neutral-900 text-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <RevealText
          field={slice.primary.heading}
          as="h1"
          className="font-display text-5xl md:text-6xl mb-4"
          align="center"
          staggerAmount={0.1}
          duration={0.5}
          id="crewhero-heading" />
        <FadeIn
          className="text-lg text-gray-300 mb-8"
          vars={{ duration: 0.8, delay: 0.3 }}>
          <PrismicRichText field={slice.primary.tagline} />
        </FadeIn>
        <FadeIn vars={{ scale: 1, opacity: .5 }} className="absolute inset-0 motion-safe:scale-125 opacity-0">
        <PrismicNextImage field={slice.primary.poster_image} alt="" priority fill className="object-cover motion-reduce:opacity-50" />
      </FadeIn>
      </div>
      {/* <Lazy rootMargin="1500px" className="hidden md:block relative overflow-hidden md:aspect-video">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${slice.primary.video_url}?autoplay=1&mute=1&loop=1&playlist=${slice.primary.video_url}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="pointer-events-none absolute left-1/2 aspect-video h-full -translate-x-1/2"
              />
            </Lazy> */}
    </Bounded>
  );
};

export default CrewHero;