import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { FC } from "react";
import { PrismicNextImage } from "@prismicio/next";

export type GalleryHeroProps = SliceComponentProps<Content.GalleryHeroSlice>;

const GalleryHero: FC<GalleryHeroProps> = async ({ slice }) => {
  return (
    <Bounded className="relative bg-neutral-900 text-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <RevealText
          field={slice.primary.title}
          id="gallery-hero-title"
          as="h1"
          className="font-display text-5xl md:text-6xl mb-4"
          align="center"
          staggerAmount={0.1}
          duration={0.5}
        />
        <FadeIn className="text-lg text-gray-300 mb-8" vars={{ duration: 0.8, delay: 0.3 }}>
          <PrismicRichText field={slice.primary.description} />
        </FadeIn>
        {slice.primary.gallery_hero_image && (
          <FadeIn className="mt-8 flex justify-center" vars={{ duration: 0.8, delay: 0.5 }}>
            <PrismicNextImage
              field={slice.primary.gallery_hero_image}
              className="rounded-lg shadow-lg max-h-96 object-cover"
            />
          </FadeIn>
        )}
      </div>
    </Bounded>
  );
};

export default GalleryHero;
