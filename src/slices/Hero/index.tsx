"use client";

import { FC, useRef } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import clsx from "clsx";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)


export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    ()=>{
      //ode sve za GSAP stavljas

      //zoom out animacija
      gsap.to(".bg-image",{
        scale: 1,
        duration: 5,
        opacity: .5,
        ease: "power3.out"
      })

    },{scope: containerRef}
  )

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen overflow-hidden bg-neutral-950"
      ref={containerRef}
    >
      <div className="bg-image absolute inset-0 scale-125 opacity-0">
        <PrismicNextImage field={slice.primary.image} alt="" priority fill className="object-cover opacity-50" />
      </div>

      <div className="flex relative h-screen flex-col justify-center">
        <div className="max-w-xl text-6xl leading-tight text-neutral-50 md:text-7xl lg:text-8xl font-display">
          <PrismicRichText field={slice.primary.heading} />
        </div>


        <div className="mt-6 max-w-md text-lg text-neutral-100">
        <PrismicRichText field={slice.primary.body} />
        </div>
        

        <div className="mt-8">
        {slice.primary.button.map((link) => (
          <PrismicNextLink
          key={link.key}
          field={link}
          className={clsx(
            "inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300",
            link.variant === "Secondary" ? "border border-white text-white hover:bg-white/20" : "bg-white text-black hover:bg-white/80",
            "w-fit"
          )}
          />
        ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
