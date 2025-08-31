import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type AboutHeroProps = SliceComponentProps<Content.AboutHeroSlice>;


const AboutHero: FC<AboutHeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
    </section>
  );
};

export default AboutHero;
