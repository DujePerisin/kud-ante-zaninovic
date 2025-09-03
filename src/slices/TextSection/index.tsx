import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { RevealText } from "@/components/RevealText";
import { FadeIn } from "@/components/FadeIn";

export type TextSectionProps = SliceComponentProps<Content.TextSectionSlice>;

const TextSection: FC<TextSectionProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 md:py-24 bg-neutral-950 text-white"
    >
      <div className="mx-auto max-w-3xl text-center">
        <RevealText
          field={slice.primary.title}
          id="textsection-heading"
          as="h2"
          className="font-display text-4xl md:text-5xl mb-8"
          align="center"
          staggerAmount={0.1}
          duration={0.5}
        />
        <FadeIn className="text-lg text-gray-300" vars={{ duration: 0.8, delay: 0.3 }}>
          <PrismicRichText field={slice.primary.body} />
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default TextSection;