// /slices/FragranceList/FragranceDisplay.tsx
"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { IoPeopleSharp } from "react-icons/io5";

type FragranceDisplayProps = {
  doc: Content.FragranceDocument;
  priority?: boolean; // NEW
};

export const FragranceDisplay = ({ doc, priority = false }: FragranceDisplayProps) => {
  const { feature, title, description } = doc.data as any;

  return (
    <FadeIn
      className="relative z-10 grid min-h-[85vh] w-full translate-y-20 items-center justify-items-start border border-white/10 p-4 text-left md:p-14 lg:p-20"
      vars={{ duration: 1.5 }}
      start="top 75%"
    >
      {isFilled.image(feature) && (
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <PrismicNextImage
              field={feature}
              fill
              // Eager-load the first item of a filtered view:
              priority={priority}
              loading={priority ? "eager" : undefined}
              fetchPriority={priority ? "high" : undefined}
              // Lighter, faster images from Imgix:
              imgixParams={{ auto: ["format", "compress"], q: 60 }}
              sizes="(min-width: 1024px) 1150px, 100vw"
              className="object-cover opacity-40 md:opacity-100 [-webkit-mask-image:linear-gradient(90deg,transparent,black_90%,black)] [mask-image:linear-gradient(90deg,transparent,black_90%,black)]"
              alt=""
            />
          </div>
        </div>
      )}

      <FadeIn className="relative z-10 grid translate-y-8">
        <h3 className="font-display mb-3 text-5xl md:text-6xl lg:text-7xl">
          <PrismicText field={title} />
        </h3>
        <p className="mb-8 text-base font-semibold text-gray-300">KUD Ante Zaninović</p>

        <div className="mb-10 max-w-md text-lg text-gray-300">
          <PrismicRichText field={description} />
        </div>

        <div className="flex flex-wrap gap-4">
          <ButtonLink document={doc} variant="Secondary">
            <IoPeopleSharp className="mr-2" /> <span>Saznaj više</span>
          </ButtonLink>
        </div>
      </FadeIn>
    </FadeIn>
  );
};
