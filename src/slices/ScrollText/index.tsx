"use client";

import { FC, useLayoutEffect, useRef } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { asText, Content } from "@prismicio/client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Bounded } from "@/components/Bounded";


export type ScrollTextProps = SliceComponentProps<Content.ScrollTextSlice>;


const ScrollText: FC<ScrollTextProps> = ({ slice }) => {
  /*const componentRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)*/
  { /* import useRef if going this route duje */}
  {/* animating this slice via GSAP in the future if time allows it, "skužajte ljudi ako nisan...radin 3 posla uz faks" */}

  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 2.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current!,
            start: "top 80%",
            once: true,
          },
          onComplete() {
            gsap.set(rootRef.current, { clearProps: "all" });
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const words = asText(slice.primary.text).split(" ");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-screen items-center justify-center bg-neutral-950 relative"
      ref={rootRef}
    >
      <div className="glow-background absolute inset-0 z-0 h-full w-full"></div>
      <div className="absoulute inset-0 bg-[url('/noisetexture.jpg)] opacity-30 mix-blend-multiply"></div>



      <div>
        <div className="mb-2 text-center tracking-wider text-neutral-200 text-sm uppercase md:md-8 md:text-base ">{slice.primary.eyebrow}</div>
        
        {/* paragraf ode */}
        <div className="text-center">
          <p className="font-display flex flex-wrap justify-center text-5xl leading-tight text-balance uppercase md:text-7xl">
            {words.map((word, index)=>(
              <span key={`${word}-${index}`} className="inline">
                {word.split("").map((char, charIndex) => (
                  <span key={`${char}-${charIndex}`} className="inline">
                    {char}
                  </span>
                ))}
                {index < words.length - 1 ? (
                  <span className="inline">&nbsp;</span>
                ) : null}
            </span>
          ))}
          </p>
        </div>
      </div>
    </Bounded>
  );
};

export default ScrollText;
