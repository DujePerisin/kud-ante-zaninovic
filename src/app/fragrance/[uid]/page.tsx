import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, asText } from "@prismicio/client";
import { PrismicRichText, PrismicText } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { OtherFragrances } from "@/components/OtherFragrances";

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("fragrance", uid).catch(() => notFound());

  return (
    <Bounded className="py-10">
      <div className="grid grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2">
        <div className="relative mb-14 flex justify-center pb-10">
          <PrismicNextImage
            field={page.data.bottle_image}
            width={600}
            height={600}
            priority
            className="relative rounded-2xl h-auto w-full object-cover shadow-lg"
          />



        </div>
        {/* Element info section */}
        <div className="text-white">
          <h1 className="font-display mb-4 border-b border-neutral-700 pb-2 text-4xl mb:text-5xl">
            <PrismicText field={page.data.title} fallback="KUD Ante Zaninović" />
          </h1>

          <div className="space-y-6">
            <p className="text-mb font-semibold"> {/* Ode potencijalno stavit AUTOR i sa CMS-a fetchat podatke ko ce bit autor */}
              KUD Ante Zaninović
            </p>

            <PrismicRichText field={page.data.description}/>
            <button className="w-full bg-white py-3 font-medium text-black uppercase transition-shadow hover:bg-neutral-200">Pročitaj više....</button>

            <div className="flex items-center gap-4 border-t border-neutral-700 pt-6">
              <p className="text-mb font-light"> {/* Ode potencijalno stavit DATUM i sa CMS-a fetchat podatke ko ce bit autor */}
              Autor: Duje Perišin 20.7.2025.
            </p>
            </div>
          </div>
        </div>
      </div>

      <OtherFragrances currentFragranceUid={uid}/>


    </Bounded>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID("fragrance", uid).catch(() => notFound());
  const settings = await client.getSingle("settings");


  return {
    title: asText(page.data.title) + " | " + settings.data.site_title,
    description: `${asText(page.data.title)}, folk dance group`,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("fragrance");

  return pages.map((page) => ({ uid: page.uid }));
}