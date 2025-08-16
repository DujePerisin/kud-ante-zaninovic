"use client";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { gsap } from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

type FadeInProps = {
    children: React.ReactNode;
    vars?: gsap.TweenVars;
    className?: string;
};

export const FadeIn = ({ children, vars = {}, className }:FadeInProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    
      useGSAP(
        ()=>{
          //ode sve za GSAP stavljas
          const mm = gsap.matchMedia()

          mm.add("(prefers-reduced-motion: no-preference)",
            () => {
              //zoom out animacija
              gsap.to(containerRef.current,{
              duration: 5,
              opacity: 1,
              ease: "power3.out",
              y: 0,
              ...vars,
            });
          });
          mm.add("(prefers-reduced-motion: reduce)",
            () => {
              //zoom out animacija
              gsap.to(containerRef.current,{
              duration: .5,
              opacity: 1,
              ease: "none",
              y: 0,
              stagger: 0,
            });
          });
        },
        {scope: containerRef},
      );

    return (
        <div ref={containerRef} className={clsx("opacity-0", className)}>
            {children}
        </div>
    )
}