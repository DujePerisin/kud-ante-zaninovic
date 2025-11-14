"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export type MediaConsentStatus = "unknown" | "granted" | "denied";

export function useMediaConsent() {
  const [status, setStatus] = useState<MediaConsentStatus>("unknown");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("mediaConsent");
    if (stored === "granted" || stored === "denied") {
      setStatus(stored);
    } else {
      setStatus("unknown");
    }
  }, []);

  const accept = () => {
    setStatus("granted");
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mediaConsent", "granted");
    }
  };

  const decline = () => {
    setStatus("denied");
    if (typeof window !== "undefined") {
      window.localStorage.setItem("mediaConsent", "denied");
    }
  };

  return {
    status,
    consentGiven: status === "granted",
    accept,
    decline,
  };
}


export function GlobalMediaConsentModal() {
  const { status, accept, decline } = useMediaConsent();

  if (status !== "unknown") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="mx-4 max-w-md rounded-2xl border border-white/10 bg-neutral-900 p-6 text-sm text-gray-100 shadow-xl">
        <h2 className="mb-3 text-lg font-semibold">
          Ugrađeni sadržaji trećih strana
        </h2>
        <p className="mb-3 text-gray-200">
          Na ovoj stranici koristimo ugrađene sadržaje s platformi kao što su
          Spotify i YouTube. Te platforme mogu koristiti kolačiće i druge
          tehnologije praćenja.
        </p>
        <p className="mb-4 text-gray-300">
          Klikom na <strong>&quot;Da, prihvaćam&quot;</strong> dopuštate učitavanje ovih
          sadržaja. Ukoliko želite promijeniti odluku možete to učinit na dnu stranice Pravila i privatnosti. Više informacija potražite u{" "}
          <Link
            href="/terms"
            className="underline underline-offset-2 hover:text-white"
          >
            Pravilima privatnosti
          </Link>
          .
        </p>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={decline}
            className="rounded-lg border border-gray-500 px-4 py-2 text-xs font-semibold text-gray-200 hover:bg-gray-800"
          >
            Ne prihvaćam
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-500"
          >
            Da, prihvaćam
          </button>
        </div>
      </div>
    </div>
  );
}

export function ConsentPlaceholderEmbed({
  provider,
}: {
  provider: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-white/20 p-4 text-xs text-gray-300">
      Prikaz sadržaja sa platforme {provider} je onemogućen jer niste
      prihvatili kolačiće trećih strana. Svoju odluku možete promijeniti brisanjem
      kolačića ili u postavkama preglednika.
    </div>
  );
}
