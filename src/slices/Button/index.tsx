import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type ButtonProps = SliceComponentProps<Content.ButtonSlice>;

import { Bounded } from "@/components/Bounded";
import { PrismicNextLink } from "@prismicio/next";

const Button: FC<ButtonProps> = ({ slice }) => {
  return (
    <Bounded className="flex justify-center items-center py-8">
      {slice.primary.button.map((link) => (
  <PrismicNextLink
    key={link.key}
    field={link}
    className={link.variant}
  />
))}
    </Bounded>
  );
};

export default Button;
