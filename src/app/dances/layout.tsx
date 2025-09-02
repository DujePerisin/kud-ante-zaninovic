import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from 'next/font/local'
import "../globals.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { ReactNode } from "react";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap"
});

const gambarino = localFont({
  src: '../gambarino.woff2',
  display: "swap",
  variable: "--font-gambarino",
})

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()
  const settings = await client.getSingle("settings")

  return {
    title: settings.data.site_title,
    description: settings.data.meta_description,
    openGraph: {
      images: isFilled.image(settings.data.fallback_og_image) 
      ? [settings.data.fallback_og_image.url]
      : ["/bili-logo.jpg"]
    }
  }
}

export default async function DancesLayout({ children }: { children: ReactNode }) {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <section
      className={`${raleway.variable} ${gambarino.variable} bg-neutral-900 text-white min-h-screen antialiased`}
    >
      <NavBar settings={settings} />
      <main className="pt-14 md:pt-16">{children}</main>
      <Footer />
    </section>
  );
}
