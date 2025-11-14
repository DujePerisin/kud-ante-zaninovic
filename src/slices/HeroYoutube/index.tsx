"use client";

import { FC, useMemo, useState } from "react";
import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const FRONT = { x: 0, y: 0, z: 0, opacity: 1 };
const MID = { x: 70, y: -80, z: -50, opacity: 0.6 };
const BACK = { x: 110, y: 80, z: -60, opacity: 0.1 };

export type HeroYoutubeProps = SliceComponentProps<Content.HeroYoutubeSlice>;

const HeroYoutube: FC<HeroYoutubeProps> = ({ slice }) => {
  // const title = slice.primary.title ?? "";
  const body = slice.primary.body ?? [];

  const items = (slice.primary.youtube_url || []).slice(0, 3);

  const [active, setActive] = useState(0);

  const ordered = useMemo(() => {
    const n = items.length;
    if (n === 0) return [] as { idx: number; preset: typeof FRONT }[];
    if (n === 1) return [{ idx: 0, preset: FRONT }];
    if (n === 2) {
      const other = active === 0 ? 1 : 0;
      return [
        { idx: active, preset: FRONT },
        { idx: other, preset: MID },
      ];
    }
    const mid = (active + 1) % 3;
    const back = (active + 2) % 3;
    return [
      { idx: active, preset: FRONT },
      { idx: mid, preset: MID },
      { idx: back, preset: BACK },
    ];
  }, [items, active]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-auto max-w-6xl px-6 py-6 md:py-12 lg:py-20 overflow-x-hidden"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 md:items-start">
        <div className="space-y-4 mb-20">
          {/* {title ? (
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl">
              {title}
            </h2>
          ) : null} */}

          {body?.length ? (
            <div className="prose prose-invert max-w-none text-gray-300 mb-7">
              <PrismicRichText field={body} />
            </div>
          ) : null}

          {items.length > 1 && (
            <div className="mt-3 flex gap-4 justify-center lg:justify-start ml-2.5">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Prikaži karticu ${i + 1}`}
                  className={[
                    // bigger dots
                    "h-9 w-9 rounded-full transition-all md:h-11 md:w-11",
                    active === i
                      ? "bg-green-600 ring-4 ring-violet-600/20"
                      : "bg-gray-300/70 hover:bg-gray-200"
                  ].join(" ")}
                >

                  <span>{i + 1}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative h-[280px] sm:h-[300px] md:h-[320px]">
          <div
            className={[
              "absolute top-0 [transform-style:preserve-3d] [perspective:800px]",
              // positioning
              "left-1/2 -translate-x-1/2",         // centered on small screens
              "md:left-1/2 md:-translate-x-1/2",   // desktop offset
              "lg:left-[60px] lg:translate-x-0",                     // shift a bit left on 1024–1279px
              // prevent any inner overflow from creating a horizontal scrollbar on xs
              // "overflow-hidden",
              // stage dimensions per breakpoint (fix the typo and make xs narrower)
              "h-[240px] w-[320px]",                // <640px
              "sm:h-[280px] sm:w-[340px]",          // ≥640px
              "md:h-[289px] md:w-[400px]",          // ≥768px
              // shrink the whole stack on xs so the translate offsets ‘shrink’ too
              "scale-[0.9] sm:scale-100",
              // card sizes via CSS variables (smaller on xs)
              "[--card-w:264px] [--card-h:165px]",  // <640px (was 300x190)
              "sm:[--card-w:350px] sm:[--card-h:220px]",
              "md:[--card-w:410px] md:[--card-h:270px]",
              "lg:[--card-w:340px] lg:[--card-h:215px]",  // slightly smaller on lg
              "xl:[--card-w:390px] xl:[--card-h:247px]"   // restore full size ≥1280px
            ].join(" ")}
          >


            {ordered.map(({ idx, preset }) => {
              const item = items[idx];
              const isSelected = idx === active;

              const style: React.CSSProperties = {
                transform: `translate3d(${preset.x}px, ${preset.y}px, ${preset.z}px) scale(${isSelected ? 1 : 0.98})`,
                opacity: preset.opacity,
                boxShadow: isSelected ? "0 20px 50px rgba(0,34,45,0.5)" : "none",
                width: "var(--card-w)",
                height: "var(--card-h)",
                borderRadius: 8,
                transitionProperty: "transform, opacity, box-shadow",
                transitionDuration: ".4s",
                transitionTimingFunction: "ease",
                willChange: "transform, opacity, box-shadow",
              };

              const alt = item.alt || item.image?.alt || "Card";
              const image = item.image;
              const link = item.link;

              const Wrapper: any = link ? PrismicNextLink : "div";
              const wrapperProps = link
                ? { field: link as any, target: "_blank", rel: "noopener noreferrer" }
                : {};

              return (
                <Wrapper
                  key={idx}
                  aria-label={alt}
                  className="absolute overflow-hidden"
                  style={style}
                  {...wrapperProps}
                >
                  {image?.url ? (
                    <PrismicNextImage
                      field={image as any}
                      alt=""
                      className="h-full w-full object-cover"
                      sizes="(max-width: 640px) 300px, (max-width: 768px) 360px, 390px"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center text-sm text-white/70"
                      style={{
                        background: idx === 0 ? "#1d4ed8" : idx === 1 ? "#22c55e" : "#fecdd3",
                      }}
                    >
                      Slika
                    </div>
                  )}

                  {/* Dim overlay for unselected card */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-black transition-opacity"
                    style={{ opacity: isSelected ? 0 : 0.35 }}
                  />
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroYoutube;
