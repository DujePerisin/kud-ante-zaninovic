import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type TextSectionProps = SliceComponentProps<Content.TextSectionSlice>;

const TextSection: FC<TextSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <p>Placeholder zasad....amo vidit kasnije</p>
    </section>
  );
};

export default TextSection;
