"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

export type PhotoShowcaseProps = SliceComponentProps<Content.PhotoShowcaseSlice>;

const PhotoShowcase: FC<PhotoShowcaseProps> = ({ slice }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  // Flatten all images from all groups
  const allImages = slice.primary.photos_group.flatMap((item) => item.photos_list ?? []).filter(Boolean);
  const firstThree = allImages.slice(0, 3);
  const restImages = allImages.slice(3);

  const handleImageClick = (idx: number) => {
    setShowCarousel(true);
    setCarouselIndex(idx);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev === 0 ? restImages.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCarouselIndex((prev) => (prev === restImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <Bounded className="bg-white px-6 py-14 text-neutral-900">
      <div className="mx-auto max-w-5xl text-center">
        <RevealText
          id="photo-showcase-title"
          field={slice.primary.heading}
          as="h2"
          className="font-display text-4xl md:text-5xl mb-6 text-center"
          align="center"
          staggerAmount={0.1}
          duration={0.5}
        />
        <FadeIn className="text-lg text-gray-700 mb-4" vars={{ duration: 0.8, delay: 0.3 }}>
          <PrismicRichText field={slice.primary.subheading} />
        </FadeIn>
        <FadeIn className="text-sm text-gray-500 mb-8" vars={{ duration: 0.8, delay: 0.4 }}>
          <PrismicRichText field={slice.primary.date} />
        </FadeIn>
        {/* First 3 images always visible */}
        <div className="flex justify-center gap-6 mb-8">
          {firstThree.map((img, idx) => (
            <div key={idx} className="cursor-pointer" onClick={() => handleImageClick(idx)}>
              <PrismicNextImage field={img} className="rounded-lg shadow-lg w-48 h-48 object-cover" />
            </div>
          ))}
        </div>
        {/* Carousel for rest images */}
        {showCarousel && restImages.length > 0 && (
          <div className="flex flex-col items-center mt-8">
            <div className="relative w-96 h-96 flex items-center justify-center">
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow"
                onClick={handlePrev}
              >
                &#8592;
              </button>
              <PrismicNextImage
                field={restImages[carouselIndex]}
                className="rounded-lg shadow-lg w-80 h-80 object-cover"
              />
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow"
                onClick={handleNext}
              >
                &#8594;
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              {carouselIndex + 1} / {restImages.length}
            </div>
          </div>
        )}
      </div>
    </Bounded>
  );
};

export default PhotoShowcase;
