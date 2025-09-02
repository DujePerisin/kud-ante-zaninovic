import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function DancesPage() {
  const client = createClient();
  const page = await client.getSingle("dances").catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("dances").catch(() => notFound());

  return {
    title: page.data.meta_title_dances,
    description: page.data.meta_description_dances,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image_dances) ?? "" }],
    },
  };
}
