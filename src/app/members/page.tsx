"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { Bounded } from "@/components/Bounded";

export default function MembersPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="py-20 text-center">Loading...</div>;
  }

  if (!session) {
    return (
      <Bounded className="bg-white px-6 py-14 text-neutral-900">
        <div className="mx-auto max-w-2xl text-center">
          <RevealText
            id="members-title"
            field={[{ type: "heading1", text: "Članovi-1", spans: [] }]}
            as="h1"
            className="font-display text-4xl md:text-5xl mb-8 text-center"
            align="center"
            staggerAmount={0.1}
            duration={0.5}
          />
          <FadeIn className="mb-8" vars={{ duration: 0.8, delay: 0.3 }}>
            <p>Pristup ovoj stranici je dozvoljen samo članovima. Prijavite se putem Google računa.</p>
          </FadeIn>
          <button
            onClick={() => signIn("google")}
            className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
          >
            Prijava s Google računom
          </button>
        </div>
      </Bounded>
    );
  }

  return (
    <Bounded className="bg-white px-6 py-14 text-neutral-900">
      <div className="mx-auto max-w-2xl text-center">
        <RevealText
          id="members-title"
          field={[{ type: "heading1", text: "Članovi-2", spans: [] }]}
          as="h1"
          className="font-display text-4xl md:text-5xl mb-8 text-center"
          align="center"
          staggerAmount={0.1}
          duration={0.5}
        />
        <FadeIn className="mb-8" vars={{ duration: 0.8, delay: 0.3 }}>
          <p>Dobrodošli, {session.user?.name}! Ovo je skriveni sadržaj za članove.</p>
        </FadeIn>
        <button
          onClick={() => signOut()}
          className="px-6 py-3 bg-gray-300 text-black rounded shadow hover:bg-gray-400 transition"
        >
          Odjava
        </button>
      </div>
    </Bounded>
  );
}
