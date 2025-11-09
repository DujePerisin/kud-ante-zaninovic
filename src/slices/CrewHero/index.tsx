import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { FC } from "react";
import { PrismicNextImage } from "@prismicio/next";

export type CrewHeroProps = SliceComponentProps<Content.CrewHeroSlice>;

const CrewHero: FC<CrewHeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative h-[60vh] sm:h-[70vh] rounded-t-3xl overflow-hidden bg-neutral-950"
    >
      <FadeIn vars={{ scale: 1, opacity: .5 }} className="absolute inset-0 motion-safe:scale-125 opacity-0">
        <PrismicNextImage field={slice.primary.poster_image} alt="" priority fill className="object-cover motion-reduce:opacity-50 h-24/12" />
      </FadeIn>
      <div className="flex relative h-screen flex-col justify-center md:pl-24">
        <FadeIn vars={{ delay: 0.8, duration: 0.8 }}>
          <p className="text-sm font-semibold tracking-[0.5em] uppercase">kud</p>
        </FadeIn>
        <FadeIn vars={{ delay: 0.8, duration: 0.8 }}>
          <p className="text-sm font-semibold tracking-[0.5em] uppercase">ante zaninović</p>
        </FadeIn>
        <RevealText
          field={slice.primary.heading}
          id="crewhero-heading"
          className="max-w-xl text-4xl leading-none text-neutral-50 md:text-7xl lg:text-8xl font-display"
          staggerAmount={.2}
          duration={1.3}
          as="h1"
        />
        <FadeIn className="mt-3 max-w-md text-lg text-neutral-100 translate-y-8" vars={{ delay: 1, duration: 1.3 }}>
          <PrismicRichText field={slice.primary.tagline} />
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default CrewHero;



// import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
// import { FadeIn } from "@/components/FadeIn";
// import { RevealText } from "@/components/RevealText";
// import { Bounded } from "@/components/Bounded";
// import { Content } from "@prismicio/client";
// import { FC } from "react";
// import { PrismicNextImage } from "@prismicio/next";

// export type CrewHeroProps = SliceComponentProps<Content.CrewHeroSlice>;

// const CrewHero: FC<CrewHeroProps> = ({ slice }) => {
//   return (
//     <Bounded
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//       className="relative h-[60vh] sm:h-[70vh] rounded-t-3xl overflow-hidden bg-neutral-950"
//     >
//       {/* Background image (banner) */}
//       <FadeIn
//         vars={{ scale: 1, opacity: 0.5 }}
//         className="absolute inset-0 motion-safe:scale-125 opacity-0"
//       >
//         <PrismicNextImage
//           field={slice.primary.poster_image}
//           alt=""
//           priority
//           fill
//           className="object-cover motion-reduce:opacity-50"
//         />
//       </FadeIn>

//       {/* Content overlay: responsive row (md+) / column (mobile) */}
//       <div className="absolute inset-0">
//         <div className="flex h-full w-full flex-col md:flex-row items-center md:items-center justify-center gap-6 md:gap-10 px-6 sm:px-8">
//           {/* LEFT: side image (shown above text on small screens) */}
//           {slice.primary.badge_image?.url && (
//             <FadeIn vars={{ delay: 0.3, duration: 0.8 }} className="w-full md:w-[32%] max-w-md">
//               <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl">
//                 <PrismicNextImage
//                   field={slice.primary.badge_image}
//                   alt=""
//                   fill
//                   className="object-cover opacity-90"
//                 />
//               </div>
//             </FadeIn>
//           )}

//           {/* RIGHT: text column */}
//           <div className="flex flex-col w-full md:w-[56%] max-w-3xl min-w-0">
//             <FadeIn vars={{ delay: 0.5, duration: 0.8 }}>
//               <p className="text-sm font-semibold tracking-[0.5em] uppercase text-neutral-100">
//                 kud
//               </p>
//             </FadeIn>
//             <FadeIn vars={{ delay: 0.6, duration: 0.8 }}>
//               <p className="text-sm font-semibold tracking-[0.5em] uppercase text-neutral-100">
//                 ante zaninović
//               </p>
//             </FadeIn>

//             <RevealText
//               field={slice.primary.heading}
//               id="crewhero-heading"
//               className="mt-2 max-w-xl text-5xl md:text-6xl lg:text-7xl leading-tight text-neutral-50 font-display"
//               staggerAmount={0.2}
//               duration={1.2}
//               as="h1"
//             />

//             <FadeIn
//               className="mt-4 max-w-xl text-base sm:text-lg text-neutral-100"
//               vars={{ delay: 0.9, duration: 1.0 }}
//             >
//               <PrismicRichText field={slice.primary.tagline} />
//             </FadeIn>
//           </div>
//         </div>
//       </div>
//     </Bounded>
//   );
// };

// export default CrewHero;
