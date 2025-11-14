// import { Content } from "@prismicio/client";
// import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
// import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
// import { useMediaConsent, ConsentPlaceholder } from "@/components/MediaConsent";


// export type HeroIstaknutoProps =
//   SliceComponentProps<Content.HeroIstaknutoSlice>;

// function toSpotifyEmbedSrc(url?: string | null) {
//   if (!url) return null;
//   try {
//     const u = new URL(url);
//     const [, type, maybeId] = u.pathname.split("/");
//     if (!type || !maybeId) return null;
//     const id = maybeId.split("?")[0]; 
//     if (type === "album") return `https://open.spotify.com/embed/album/${id}`;
//     if (type === "playlist") return `https://open.spotify.com/embed/playlist/${id}`;
//     if (type === "track") return `https://open.spotify.com/embed/track/${id}`;
//     return `https://open.spotify.com/embed/${type}/${id}`; 
//   } catch {
//     return null;
//   }
// }

// export default function HeroSpotify({ slice }: HeroIstaknutoProps) {
//   const title = slice.primary.title ?? "";
//   const body = slice.primary.body ?? [];
//   const embedSrc = toSpotifyEmbedSrc(slice.primary.spotify_url);
//     const platforms = slice.primary.exploremore ?? []; 

//   return (
//     <section className="mx-auto max-w-6xl px-6 py-10 md:py-16 lg:py-24">
//       <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
//         <div className="space-y-6">
//           {title && <h2 className="font-display text-2xl sm:text-3xl md:text-4xl">{title}</h2>}
//           {body?.length ? (
//             <div className="prose prose-invert max-w-none text-gray-300">
//               <PrismicRichText field={body} />
//             </div>
//           ) : null}

//           {platforms.length > 0 && (
//             <div className="flex flex-wrap items-center gap-3 pt-2">
//               {platforms.map((item, i) => {
//                 if (!item.link || !item.icon?.url) return null;
//                 const aria = item.icon.alt || "External platform";

//                 return (
//                   <PrismicNextLink
//                     key={i}
//                     field={item.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={aria}
//                     className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/20"
//                   >
//                     <PrismicNextImage
//                       field={item.icon}
//                       width={24}
//                       height={24}
//                       alt=""
//                       className="object-contain"
//                     />
//                   </PrismicNextLink>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         <div>
//           {embedSrc ? (
//             <div className="w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10">
//               <iframe
//                 title={title || "Spotify"}
//                 src={embedSrc}
//                 width="100%"
//                 height="380"
//                 loading="lazy"
//                 allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//               />
//             </div>
//           ) : (
//             <div className="rounded-2xl border border-dashed border-white/20 p-6 text-sm text-gray-400">
//               Nedostaje valjani Spotify URL (album/playlist/track) u polju <code>spotify_url</code>.
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useMediaConsent, ConsentPlaceholderEmbed } from "@/components/MediaConsent";

export type HeroIstaknutoProps =
  SliceComponentProps<Content.HeroIstaknutoSlice>;

function toSpotifyEmbedSrc(url?: string | null) {
  if (!url) return null;
  try {
    const u = new URL(url);
    const [, type, maybeId] = u.pathname.split("/");
    if (!type || !maybeId) return null;
    const id = maybeId.split("?")[0];
    if (type === "album") return `https://open.spotify.com/embed/album/${id}`;
    if (type === "playlist") return `https://open.spotify.com/embed/playlist/${id}`;
    if (type === "track") return `https://open.spotify.com/embed/track/${id}`;
    return `https://open.spotify.com/embed/${type}/${id}`;
  } catch {
    return null;
  }
}

export default function HeroSpotify({ slice }: HeroIstaknutoProps) {
  const title = slice.primary.title ?? "";
  const body = slice.primary.body ?? [];
  const embedSrc = toSpotifyEmbedSrc(slice.primary.spotify_url);
  const platforms = slice.primary.exploremore ?? [];

  const { consentGiven, status } = useMediaConsent();

  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-16 lg:py-24 overflow-x-hidden">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        <div className="space-y-6">
          {title && (
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl">
              {title}
            </h2>
          )}

          {body?.length ? (
            <div className="prose prose-invert max-w-none text-gray-300">
              <PrismicRichText field={body} />
            </div>
          ) : null}

          {platforms.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {platforms.map((item, i) => {
                if (!item.link || !item.icon?.url) return null;
                const aria = item.icon.alt || "Vanjska platforma";

                return (
                  <PrismicNextLink
                    key={i}
                    field={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={aria}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/20"
                  >
                    <PrismicNextImage
                      field={item.icon}
                      width={24}
                      height={24}
                      alt=""
                      className="object-contain"
                    />
                  </PrismicNextLink>
                );
              })}
            </div>
          )}
        </div>

        <div>
          {embedSrc ? (
            <div className="w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10">
              {consentGiven ? (
                <iframe
                  title={title || "Spotify"}
                  src={embedSrc}
                  width="100%"
                  height="380"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
              ) : (
                <ConsentPlaceholderEmbed provider="Spotify" />
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/20 p-6 text-sm text-gray-400">
              Nedostaje valjani Spotify URL (album/playlist/track) u polju{" "}
              <code>spotify_url</code>.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}