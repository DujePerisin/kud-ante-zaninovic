import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";

type ContactDetailsProps = SliceComponentProps<Content.ContactDetailsSlice>;

const ContactDetails: FC<ContactDetailsProps> = ({ slice }) => {
  const { heading, body, details } = slice.primary;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 bg-white text-neutral-900">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* LEFT: heading + intro text */}
        <div>
          <RevealText
            field={heading || "Kontakt podaci"}
            id={slice.id}
            as="h2"
            className="text-2xl md:text-3xl text-black font-semibold tracking-[0.2em]"
            duration={1.3}
          />

          {body && (
            <FadeIn vars={{ duration: 0.8 }} start="top 90%">
              <div className="mt-6 space-y-4 leading-relaxed text-base md:text-lg text-neutral-800">
                <PrismicRichText field={body} />
              </div>
            </FadeIn>
          )}
        </div>

        {/* RIGHT: contact detail cards */}
        <FadeIn vars={{ duration: 0.8 }} start="top 90%">
          <div className="grid gap-6">
            {(details || []).map((item, i) => {
              const label = item.label || "";
              const value = item.value || "";
              const type = item.type || "text";
              const note = item.note || "";

              let href: string | undefined;

              if (type === "email" && value) {
                href = `mailto:${value}`;
              } else if (type === "phone" && value) {
                href = `tel:${value}`;
              } else if (type === "link" && isFilled.link(item.url)) {
                href = item.url.url;
              }

              const clickable = !!href;

              return (
                <div
                  key={i}
                  className="flex flex-col rounded-xl border border-neutral-200 bg-white/70 px-4 py-3 shadow-sm"
                >
                  {label && (
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      {label}
                    </span>
                  )}

                  {clickable ? (
                    <Link
                      href={href!}
                      target={type === "link" ? "_blank" : undefined}
                      rel={type === "link" ? "noopener noreferrer" : undefined}
                      className="mt-1 text-base md:text-lg font-semibold text-neutral-900 hover:[text-shadow:0_0_10px_rgba(0,0,0,0.35)] transition-all duration-300 break-all"
                    >
                      {value}
                    </Link>
                  ) : (
                    <span className="mt-1 text-base md:text-lg font-semibold text-neutral-900">
                      {value}
                    </span>
                  )}

                  {note && (
                    <span className="mt-1 text-xs text-neutral-500">
                      {note}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactDetails;
