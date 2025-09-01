import Link from "next/link";
import Image from "next/image";
import { Bounded } from "@/components/Bounded";
import { FadeIn } from "@/components/FadeIn";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Bounded className="py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center">
          <FadeIn vars={{ duration: 0.6 }}>
            <Link
              href="/"
              aria-label="KUD Ante Zaninović Home"
              className="shrink-0"
            >
              <Image
                src="/icon.png"
                alt="KUD Ante Zaninović"
                width={150}
                height={25}
                className="h-auto w-[150px] md:w-[200px]"
              />
            </Link>
          </FadeIn>

          <div className="text-center md:text-left">
            <FadeIn vars={{ duration: 0.6 }}>
              <p className="text-2xl uppercase tracking-widest text-white/60">
                Error 404
              </p>
            </FadeIn>

            <FadeIn vars={{ duration: 0.6, delay: 0.15 }}>
              <p className="mt-4 max-w-xl text-white/70 md:max-w-none">
                Možda je premještena ili nikad nije postojala. Vratite se na početnu
                ili istražite naše stranice.
              </p>
            </FadeIn>

            <FadeIn vars={{ duration: 0.6, delay: 0.22 }}>
              <hr className="mx-auto my-4 w-full max-w-xl border-t border-white/20 md:mx-0" />
            </FadeIn>

            <FadeIn vars={{ duration: 0.6, delay: 0.25 }}>
              <p className="mt-3 max-w-xl text-white/70 md:max-w-none">
                Maybe it was moved or never existed. Go back to the homepage or explore our pages.
              </p>
            </FadeIn>

            <FadeIn vars={{ duration: 0.6, delay: 0.35 }}>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <Link
                  href="/"
                  className="rounded-xl bg-white px-5 py-3 font-medium text-neutral-900"
                >
                  Početna
                </Link>
                <Link
                  href="/gallery"
                  className="rounded-xl border border-white/20 px-5 py-3 font-medium"
                >
                  Galerija
                </Link>
                <Link
                  href="/about"
                  className="rounded-xl border border-white/20 px-5 py-3 font-medium"
                >
                  O nama
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </Bounded>
    </main>
  );
}
