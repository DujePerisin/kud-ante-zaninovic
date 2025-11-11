// import { type Metadata } from "next";
// import { notFound } from "next/navigation";
// import { asImageSrc } from "@prismicio/client";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";

// export default async function GalleryPage() {
//   const client = createClient();
//   const page = await client.getSingle("gallery").catch(() => notFound());

//   return <SliceZone slices={page.data.slices} components={components} />;
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const page = await client.getSingle("gallery").catch(() => notFound());

//   return {
//     title: page.data.meta_title_gallery,
//     description: page.data.meta_description_gallery,
//     openGraph: {
//       images: [{ url: asImageSrc(page.data.meta_image_gallery) ?? "" }],
//     },
//   };
// }


// PRIVREMENO RJESENJE DOK NE SREDIN TOTALNO GALERIJU NAKON ISPITA


import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { FadeIn } from "@/components/FadeIn"; 

export default async function GalleryPage() {
  const client = createClient();
  const page = await client.getSingle("gallery").catch(() => notFound());

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 text-center">
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl tracking-[0.4rem] flex justify-center">
          Društvene mreže
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-16 justify-items-center">
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="https://www.instagram.com/kudantezaninovic/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="cursor-pointer p-3 text-white transition-colors duration-300 rounded-2xl hover:bg-white/20"
            >
              <Image
                src="/instagram-white-icon.svg"
                alt="Instagram"
                width={48}
                height={48}
                className="h-12 w-12"
                priority
              />
            </Link>
            <FadeIn
              vars={{ delay: 0.3, duration: 0.8 }}
              className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.4em] uppercase"
            >
              instagram
            </FadeIn>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Link
              href="https://www.facebook.com/p/KUD-Ante-Zaninovic-100063625745937/?locale=hr_HR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="cursor-pointer p-3 text-white transition-colors duration-300 rounded-2xl hover:bg-white/20"
            >
              <Image
                src="/facebook-white-icon.svg"
                alt="Facebook"
                width={48}
                height={48}
                className="h-12 w-12"
                priority
              />
            </Link>
            <FadeIn
              vars={{ delay: 0.4, duration: 0.8 }}
              className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.4em] uppercase"
            >
              facebook
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("gallery").catch(() => notFound());

  return {
    title: page.data.meta_title_gallery,
    description: page.data.meta_description_gallery,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image_gallery) ?? "" }],
    },
  };
}
