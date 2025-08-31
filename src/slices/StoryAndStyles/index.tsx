"use client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { Bounded } from "@/components/Bounded";

function isEmail(str: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

export default function StoryAndStyles({ slice }: SliceComponentProps<any>) {
  const p = slice.primary;

  return (
    <Bounded className="bg-white px-6 py-14 text-neutral-900">
      <div className="mx-auto max-w-5xl">
        {p.title && (
          <RevealText
            id="story-title"
            field={p.title}
            as="h2"
            className="font-display text-4xl md:text-5xl mb-6 text-center"
            align="center"
            staggerAmount={0.1}
            duration={0.5}
          />
        )}
        {p.story && (
          <FadeIn className="prose mx-auto mt-4 text-lg text-gray-700" vars={{ duration: 0.8, delay: 0.3 }}>
            <PrismicRichText field={p.story} />
          </FadeIn>
        )}

        <FadeIn className="mt-8 grid gap-4 text-sm text-neutral-700 sm:grid-cols-2" vars={{ duration: 0.8, delay: 0.5 }}>
          {p.home_base && (
            <p><span className="font-medium">Home base:</span> {p.home_base}</p>
          )}
          {p.booking_email && (
            <p>
              <span className="font-medium">Booking:</span>{" "}
              {isEmail(p.booking_email)
                ? <a className="underline" href={`mailto:${p.booking_email}`}>{p.booking_email}</a>
                : <span>{p.booking_email}</span>}
            </p>
          )}
        </FadeIn>
      </div>
    </Bounded>
  );
}