// import { FC } from "react";
// import { Content } from "@prismicio/client";
// import { SliceComponentProps } from "@prismicio/react";
// import { Lazy } from "@/components/Lazy";


// export type VideoProps = SliceComponentProps<Content.VideoSlice>;


// const Video: FC<VideoProps> = ({ slice }) => {
//   return (
//     <section
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//       className="bg-black"
//     >
//       <h2 className="sr-only">
//         KUD Ante Zaninović
//       </h2>

//       <Lazy rootMargin="1500px" className="hidden md:block relative overflow-hidden md:aspect-video">
//         <iframe
//           src={`https://www.youtube-nocookie.com/embed/${slice.primary.youtube_video_id}?autoplay=1&mute=1&loop=1&playlist=${slice.primary.youtube_video_id}`}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           className="pointer-events-none absolute left-1/2 aspect-video h-full -translate-x-1/2"
//         />
//       </Lazy>
//     </section>
//   );
// };

// export default Video;


"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Lazy } from "@/components/Lazy";
import { useMediaConsent, ConsentPlaceholderEmbed } from "@/components/MediaConsent";

export type VideoProps = SliceComponentProps<Content.VideoSlice>;

const Video: FC<VideoProps> = ({ slice }) => {
  const { consentGiven } = useMediaConsent();
  const videoId = slice.primary.youtube_video_id;

  if (!videoId) {
    return null;
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-black"
    >
      <h2 className="sr-only">KUD Ante Zaninović</h2>

      {consentGiven ? (
        <Lazy
          rootMargin="1500px"
          className="hidden md:block relative overflow-hidden md:aspect-video"
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="pointer-events-none absolute left-1/2 aspect-video h-full -translate-x-1/2"
          />
        </Lazy>
      ) : (
        <div className="hidden md:flex items-center justify-center py-16">
          <div className="w-full max-w-4xl px-4">
            <ConsentPlaceholderEmbed provider="YouTube" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Video;
