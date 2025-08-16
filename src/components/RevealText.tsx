"use client"

import { useGSAP } from "@gsap/react";
import { asText, RichTextField } from "@prismicio/client"
import clsx from "clsx";
import { useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP)

type RevealTextProps = {
    field: RichTextField;
    id: string;
    className?: string;
    staggerAmount?: number;
    as?: React.ElementType;
    duration?: number;
    align?: "center" | "start" | "end";
};

export const RevealText = ({
    field, 
    id, 
    align = "start", 
    as: Component = "div", 
    duration = .8, 
    className, 
    staggerAmount = .1,
}: RevealTextProps) => {
    const componentRef = useRef<HTMLDivElement>(null);
    //iz rich text u obicni text i podijeli ga pri svakom razmaku
    const words = asText(field).split(" ");

    useGSAP(
        () => {

        gsap.to(".reveal-text-word", {
            y: 0,
            stagger: staggerAmount,
            duration,
            ease: "power3.out",
        });

    }, {scope: componentRef})

    return (
        <Component
            className={clsx(
                "reveal-text text-balance",
                align === "center" && "text-center",
                align === "center" && "text-right",
                align === "center" && "text-left",
                className,
            )}
            ref={componentRef}        
        >
            {words.map((word, index) => (
                //pobrine se da je kljuc unikantan
                <span key={`${word}-${index}-${id}`} className="mb-0 inline-block overflow-hidden">
                    <span className=" reveal-text-word mt-0 inline-block translate-y-full will-change-transform ">
                        {word}
                    </span>
                </span>

            ))}
        </Component>
    )
};