"use client"

import { useGSAP } from "@gsap/react";
import { asText, RichTextField } from "@prismicio/client"
import clsx from "clsx";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger)

type RevealTextProps = {
    field: RichTextField | string;
    id: string;
    className?: string;
    staggerAmount?: number;
    as?: React.ElementType;
    duration?: number;
    align?: "center" | "start" | "end";
    triggerStart?: string;
    triggerEnd?: string;
};

export const RevealText = ({
    field,
    id,
    align = "start",
    as: Component = "div",
    duration = .8,
    className,
    staggerAmount = .1,
    triggerStart = "top 80%",
    triggerEnd = "bottom 20%",
}: RevealTextProps) => {
    const componentRef = useRef<HTMLDivElement>(null);
    //iz rich text u obicni text i podijeli ga pri svakom razmaku
    const text = typeof field === 'string' ? field : asText(field) ?? '';
    const words = text.split(" ");

    useGSAP(
        () => {
            const mm = gsap.matchMedia()

            mm.add("(prefers-reduced-motion: no-preference)",
                () => {
                    //zoom out animacija
                    gsap.to(".reveal-text-word", {
                        y: 0,
                        stagger: staggerAmount,
                        duration,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: componentRef.current,
                            start: triggerStart,
                            end: triggerEnd,
                        }
                    });
                });
            mm.add("(prefers-reduced-motion: reduce)",
                () => {
                    //zoom out animacija
                    gsap.to(".reveal-text-word", {
                        duration: .5,
                        opacity: 1,
                        ease: "none",
                        y: 0,
                        stagger: 0,
                    });
                });
        }, { scope: componentRef })

    return (
        <Component
            className={clsx(
                "reveal-text text-balance",
                align === "center" && "text-center",
                align === "end" && "text-right",
                align === "start" && "text-left",
                className,
            )}
            ref={componentRef}
        >
            {words.map((word, index) => (
                //pobrine se da je kljuc unikantan
                <span key={`${word}-${index}-${id}`} className="mb-0 inline-block overflow-hidden pb-4">
                    <span className=" reveal-text-word mt-0 inline-block translate-y-[120%] will-change-transform ">
                        {word}
                        {index < words.length - 1 ? <> &nbsp; </> : null}
                    </span>
                </span>

            ))}
        </Component>
    )
};