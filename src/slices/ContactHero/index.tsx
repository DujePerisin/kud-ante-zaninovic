import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";

type Props = SliceComponentProps<Content.ContactHeroSlice>;

const ContactHero = ({ slice }: Props) => {
  const eyebrow = slice.primary.eyebrow || "kud ante zaninović";
  const title = slice.primary.title || "Kontaktirajte nas";
  const image = slice.primary.image;

  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 text-neutral-50">
      <div className="relative flex w-full h-60 sm:h-72 md:h-80 lg:h-[24rem] xl:h-[28rem] items-stretch">
        {/* hero za ostale stranice */}
        <div className="relative z-30 flex flex-col justify-center flex-[0_0_58%] px-4 sm:px-6 md:px-10 lg:px-12">
          <FadeIn vars={{ delay: 0.8, duration: 0.8 }} className="mb-3 sm:mb-4">
            <p className="text-[8px] sm:text-xs md:text-sm font-semibold tracking-[0.4em] sm:tracking-[0.5em] uppercase">
              {eyebrow}
            </p>
          </FadeIn>

          <RevealText
            field={title}
            id={`contact-hero-${slice.id}`}
            className="
              font-display leading-none text-neutral-50
              text-nowrap md:tracking-wider
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl
            "
            staggerAmount={0.2}
            duration={1.7}
            as="h1"
          />
        </div>

        <div className="relative flex-[0_0_42%] h-full overflow-hidden">
          <FadeIn vars={{ delay: 0.0, duration: 0.8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image?.url || "/about-0.webp"}
              alt={image?.alt || "Kontaktirajte nas"}
              className="
                          h-full w-full object-cover
                          transform-gpu
                          origin-center

                          /* posebni media queries / custom media queries */
                          scale-[2.70] translate-x-3 translate-y-15

                          sm:scale-[1.70] sm:translate-x-8 sm:translate-y-10

                          md:scale-[1.50] md:translate-x-8 md:translate-y-10

                          lg:scale-[1.40] lg:translate-x-8 lg:translate-y-10

                          xl:scale-120 xl:translate-x-0 xl:translate-y-0
                        "
            />
          </FadeIn>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-neutral-950/85 via-transparent to-transparent" />
        </div>

        <div
          className={`
            pointer-events-none
            absolute top-0 h-full -skew-x-12 bg-neutral-950 rounded-b-3xl z-20
            w-[38%] right-[30%]
            sm:w-[42%] sm:right-[32%]
            md:w-[46%] md:right-[34%]
            lg:w-[50%] lg:right-[36%]
          `}
        />
      </div>
    </section>
  );
};

export default ContactHero;
