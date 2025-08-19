// import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next"
// import clsx from "clsx"


// export type ButtonLinkProps = PrismicNextLinkProps & {
//     variant?: "Primary" | "Secondary"
// }

// export const ButtonLink = (
//     {className, variant = "Primary", ...restProps } : ButtonLinkProps
// ) => {

//     return (
//         <PrismicNextLink
//             className={clsx(
//                 "inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300",
//                 variant === "Secondary" ? "border border-white text-white hover:bg-white/20" : "bg-white text-black hover:bg-white/80",
//                 className
//             )}

//             {...restProps}
//         />

//     )
// }

// Above is the currently PRESENTED official solution, which fails to work due to version issues or some other pi**a mom's

// Below is the ChatGPT's solution for the problem which doesn't show any errors but I currently don't have the time to explore
// all of its pros&cons since my work shift is ending soon....

import * as React from "react";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

// Base = everything except the union discriminants + prefetch
type Base =
  Omit<PrismicNextLinkProps, "href" | "field" | "document" | "prefetch"> & {
    prefetch?: boolean | null; // narrow away 'auto'
  };

// Enforce "exactly one" of href | field | document
type OneOfTarget =
  | { href: PrismicNextLinkProps["href"]; field?: never; document?: never }
  | { field: PrismicNextLinkProps["field"]; href?: never; document?: never }
  | { document: PrismicNextLinkProps["document"]; href?: never; field?: never };

export type ButtonLinkProps = Base &
  OneOfTarget & {
    variant?: "Primary" | "Secondary";
    className?: string;
  };

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "Primary", ...restProps }, ref) => {
    return (
      <PrismicNextLink
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300",
          variant === "Secondary"
            ? "border border-white text-white hover:bg-white/20"
            : "bg-white text-black hover:bg-white/80",
          className
        )}
        {...restProps}
      />
    );
  }
);
ButtonLink.displayName = "ButtonLink";
