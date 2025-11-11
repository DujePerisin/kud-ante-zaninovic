import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";
import { createClient } from "@/prismicio"
import { ButtonLink } from "@/components/ButtonLink";


export type ProductFeatureProps =
  SliceComponentProps<Content.ProductFeatureSlice>;


const ProductFeature: FC<ProductFeatureProps> = async ({ slice }) => {
  const client = createClient();
  const fragrance = isFilled.contentRelationship(slice.primary.fragrance)
    ? await client.getByID<Content.FragranceDocument>(
      slice.primary.fragrance.id)
    : null;


  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden bg-black py-16 text-white md:py-24"
    >

      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:grid-rows-[auto,auto]">
        <FadeIn
          className="translate-y-16 opacity-0 lg:col-span-2 lg:row-span-2"
          vars={{ duration: 1 }}
          start="top 75%"
        >
          <PrismicNextImage field={slice.primary.image} className="h-auto w-full object-cover" />
        </FadeIn>
        <FadeIn
          className="translate-y-16 space-y-6 self-start bg-white/10 p-10 opacitiy-0 lg:col-start-3 lg:row-start-1"
        >
          <h2 className="text-3xl leading-tight font-semibold md:text-4xl">
            <PrismicText field={slice.primary.heading} />
          </h2>
          <div className="text-base max-w-lg text-gray-300">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </FadeIn>
        {/* link za neku drugu stranicu, tutorial kaze "parfem" al ko ga smrdi */}

        <FadeIn
          className="animate-in opacity-0 relative translate-y-16 self-end bg-white/10 will-change-transform"
          vars={{ duration: 1, delay: .5 }}
        >
          <PrismicNextImage
            field={fragrance?.data.bottle_image}
            className="mx-auto -mt-10 w-full md:-mt-20" /> {/* LOGO UBACI OVDJE */}

          <div className="flex justify-between p-10 pt-4">
            <div className="space-y-1">
              <h3 className="font-display text-4xl">
                <PrismicText field={fragrance?.data.title} fallback="Fragrance" />
              </h3>
              <p className="mt-2 text-gray-400">Svi plesovi na jednom mjestu </p>
              {/* "document" će ih preusmjerit zapravo na prismicio.ts file linije 21-25 */}
              {/* <ButtonLink
                document={fragrance}
                variant="Secondary"
                className="mt-6"
              >
                Saznaj više
              </ButtonLink> */}
              {/* privremeno rjesenje da vodi na same plesove dok ne sredimo do kraja web */}
              <ButtonLink
                href="/dances"
                variant="Secondary"
                className="mt-6"
              >
                Saznaj više
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </div>
    </Bounded>
  );
};

export default ProductFeature;
