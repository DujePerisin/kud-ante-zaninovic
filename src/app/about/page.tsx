import type { Metadata } from "next";
import Image from "next/image";
import { asImageSrc } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-neutral-950 text-neutral-50">
      {/* hero za ostale stranice */}
      <section className="relative w-full overflow-hidden bg-neutral-950 text-neutral-50">
        <div className="relative flex w-full h-60 sm:h-72 md:h-80 lg:h-[24rem] xl:h-[28rem] items-stretch">
          <div className="relative z-30 flex flex-col justify-center flex-[0_0_58%] px-4 sm:px-6 md:px-10 lg:px-12">
            <FadeIn vars={{ delay: 0.8, duration: 0.8 }} className="mb-3 sm:mb-4">
              <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-[0.4em] sm:tracking-[0.5em] uppercase">
                kud ante zaninović
              </p>
            </FadeIn>

            <RevealText
              field="Naša kaštelanska priča"
              id="abouthero-heading"
              className="
                          font-display leading-none text-neutral-50
                          text-nowrap md:tracking-wider
                          text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                          max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl
                        "
              staggerAmount={0.2}
              duration={1.7}
              as="h1"
            />
          </div>
          <div className="relative flex-[0_0_42%] h-full overflow-hidden">
            <FadeIn vars={{ delay: 0.0, duration: 0.8 }} >
              <img
                src="about-0.webp"
                alt="Virtual care illustration"
                className="
                            h-full w-full object-cover
                            transform-gpu
                            origin-center

                            /* posebni media queries / custom media queries */
                            scale-[2.00] translate-x-8 translate-y-15

                            sm:scale-[1.66] sm:translate-x-8 sm:translate-y-10

                            md:scale-[1.46] md:translate-x-8 md:translate-y-10

                            lg:scale-[1.26] lg:translate-x-8 lg:translate-y-10

                            xl:scale-120 xl:translate-x-0 xl:translate-y-0
                          "              
                        />
            </FadeIn>

            {/* zasjenčenje priko same slike*/}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-neutral-950/85 via-transparent to-transparent" />
          </div>

          {/* dynamic gray overlay sa cool dizajnon --- 2/3 komponente ||||// */}
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

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 rounded-2xl mt-4 mb-4 bg-white">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <RevealText
              field="Što nas pokreće?"
              id="abouthero-heading"
              className="text-2xl md:text-3xl text-black font-semibold tracking-widest"
              duration={1.7}
              as="h2"
              triggerStart="top"
              triggerEnd="bottom%"
            />
            {/* <h2 className="text-2xl md:text-3xl text-black font-semibold tracking-widest">Što nas pokreće?</h2> */}
            <FadeIn vars={{ delay: 0.0, duration: 0.8 }} start="top 90%">
              <p className="mt-6 leading-relaxed text-neutral-800 text-base md:text-base lg:text-lg xl:text-xl">
                Vjerujemo da je kultura temelj zajedništva. Naša vizija je očuvati tradiciju Kaštela kroz ples, pjesmu i narodnu nošnju, te je približiti novim generacijama. Kroz svaki nastup i svaku probu njegujemo duh zajedništva, ljubavi prema baštini i ponos pripadnosti našem kraju.
              </p>
              <p className="mt-4 leading-relaxed text-neutral-800 text-base md:text-base lg:text-lg xl:text-xl">
                Naš cilj je da folklor ne bude samo uspomena, već i živi dio današnjeg života te samim time i poveznica između prošlosti i budućnosti našeg kraja.
              </p>
            </FadeIn>

          </div>
          <FadeIn vars={{ delay: 0.0, duration: 0.8 }} start="top 90%" className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-[5/4] ring-1 ring-white/10">
            <Image src="/about-1.webp" alt="" fill className="object-cover" />
          </FadeIn>

        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 rounded-2xl mt-4 mb-4 bg-white">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            {/* <h2 className="text-2xl md:text-3xl text-black font-semibold tracking-widest">Zašto plešemo?</h2> */}
            <RevealText
              field="Zašto plešemo?"
              id="abouthero-heading"
              className="text-2xl md:text-3xl text-black font-semibold tracking-widest"
              duration={1.7}
              as="h2"
              triggerStart="top"
              triggerEnd="bottom%"
            />
            <FadeIn vars={{ delay: 0.0, duration: 0.8 }} start="top 90%">
              <p className="mt-6 leading-relaxed text-neutral-800 text-base md:text-base lg:text-lg xl:text-xl">
                Ljubav prema folkloru vodi nas od samih početaka. Svaki takt tamburice, svaki korak kola i svaki osmijeh na pozornici pričaju priču o ljubavi prema našem zavičaju. To nije samo hobi, to je način života koji nas ispunjava i povezuje.
              </p>
              <p className="mt-4 leading-relaxed text-neutral-800 text-base md:text-base lg:text-lg xl:text-xl">
                Strastveno njegujemo izvorne plesove, pjesme i običaje Kaštela i Dalmacije, ali istodobno pratimo suvremene trendove i surađujemo s drugim društvima kako bismo tradiciju predstavili na nov, svjež način.
              </p>
            </FadeIn>

          </div>

          {/* <FadeIn vars={{ delay: 0.0, duration: 0.8 }} start="top 90%">
            <div className="grid grid-cols-2 gap-4">
              {["/za-jubav-tance-igrase-16.webp", "/za-jubav-tance-igrase-16.webp", "/za-jubav-tance-igrase-16.webp", "/za-jubav-tance-igrase-16.webp"].map(
                (src, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10"
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                )
              )}
            </div>
          </FadeIn> */}
                    <FadeIn vars={{ delay: 0.0, duration: 0.8 }} start="top 90%" className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-[5/4] ring-1 ring-white/10">
            <Image src="/about-2-edit.webp" alt="" fill className="object-cover" />
          </FadeIn>
        </div>
      </section>

      {/* STORY STRIP */}
      <section className="bg-neutral-900 py-16 md:py-24 border-y border-white/10">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl tracking-[0.4rem]">Naša priča</h2>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-neutral-300">
            Kulturno umjetničko društvo Ante Zaninović osnovano je u rujnu 2000. godine s ciljem očuvanja i promicanja bogate kulturne baštine Kaštela i Dalmacije kroz folklor, pjesmu i narodnu nošnju. Kroz godine smo rasli i razvijali se, okupljajući strastvene članove svih generacija.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl ring-1 ring-white/10">
            <Image src="/about-3.webp" alt="" fill className="object-cover" />
          </div>
        </div>

        {/* stats band */}
        <div className="mt-12 bg-neutral-900 py-12 text-neutral-50 border-t border-white/10">
          <FadeIn vars={{ delay: 0.8, duration: 0.8 }} className="mb-3 sm:mb-4 sm:text-base md:text-lg lg:text-2xl  font-semibold tracking-[0.4em] sm:tracking-[0.5em] uppercase flex justify-center pb-20">
            folkorni sastavi
          </FadeIn>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-3">
            <Stat label="Plesački" value="Foklorni asambl" sub="16 - 39 god" />
            <Stat label="Svirački" value="Orkestar" sub="16+ god" />
            <Stat label="Plesačka" value="Mlađa dječja grupa" sub="4 - 10 god" />
            <Stat label="Plesačka" value="Starija dječja grupa" sub="10 - 16 god" />
            <Stat label="Sviračka" value="Škola mandoline/gitare" sub="16+ god" />
            <Stat label="Plesačka" value="Veteranska grupa" sub="39 - 99 god" />
          </div>
        </div>
      </section>

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
                src="instagram-white-icon.svg"
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
                src="facebook-white-icon.svg"
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

      <section className="relative overflow-hidden bg-[url('/background.avif')] bg-cover bg-center py-20 text-gray-50 md:py-28 border-t border-white/10">
        <div className="absolute inset-0 bg-neutral-950/60 z-0" />

        <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center px-6">
          <FadeIn
            className="translate-y-2 text-sm font-light tracking-[.2em] uppercase"
            vars={{ duration: 0.5 }}
          >
            kud ante zaninović
          </FadeIn>

          <RevealText
            id="cta-heading"
            field="Budi i ti dio naše priče"
            as="h2"
            className="font-display mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
            align="center"
            staggerAmount={0.1}
            duration={0.8}
          />

          <FadeIn
            className="mx-auto max-w-2xl translate-y-2 text-lg text-balance text-gray-300"
            vars={{ duration: 0.8, delay: 0.3 }}
          >
            <p>
              Pridruži se našoj folklornoj obitelji i postani dio bogate tradicije Kaštela.
              Ako voliš ples, pjesmu i veselo društvo – čekamo te otvorena srca!
            </p>
          </FadeIn>

          <div className="mt-10 flex justify-center">
            <FadeIn vars={{ duration: 0.6, delay: 0.6 }}>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd9bN_FLjUzWPLkO0YZORt_l0FozgIHAylQ_dEqDRn8P10eHQ/viewform?usp=header"
                className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 ring-1 ring-black/5 transition hover:bg-neutral-200"
              >
                Pridruži se sada
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>


    </div>
  );
}

/* helper funkcija za brojeve sastava */
function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">{label}</p>
      <p className="font-display text-2xl">{value}</p>
      <p className="text-xs text-neutral-400">{sub}</p>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const client = createClient();
    const page = await client.getSingle("about");
    return {
      title: page.data.meta_title_about ?? "About Us",
      description: page.data.meta_description_about ?? "Who we are and how we work.",
      openGraph: {
        images: [{ url: asImageSrc(page.data.meta_image_about) ?? "" }],
      },
    };
  } catch {
    return {
      title: "About Us",
      description: "Who we are and how we work.",
      openGraph: { images: [] },
    };
  }
}










// import { type Metadata } from "next";
// import { notFound } from "next/navigation";
// import { asImageSrc } from "@prismicio/client";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";
// import { Bounded } from "@/components/Bounded";

// export default async function AboutPage() {
//   const client = createClient();
//   const page = await client.getSingle("about").catch(() => notFound());

//   return (
//     <div className="flex flex-col items-center w-full">
//       {/* Decorative Top Lines */}
//       <div className="relative w-full h-16 flex justify-center items-center overflow-hidden">

//       </div>

//       {/* Actual page content from Prismic */}
//       {/* <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-8">
//         <SliceZone slices={page.data.slices} components={components} />
//       </div> */}
//       <Bounded>
//         <SliceZone slices={page.data.slices} components={components} />
//       </Bounded>
//     </div>
//   );
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient();
//   const page = await client.getSingle("about").catch(() => notFound());

//   return {
//     title: page.data.meta_title_about,
//     description: page.data.meta_description_about,
//     openGraph: {
//       images: [{ url: asImageSrc(page.data.meta_image_about) ?? "" }],
//     },
//   };
// }




// segmentizacija koda na komponente
