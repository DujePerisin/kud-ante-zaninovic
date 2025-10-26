"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useSession, signIn, signOut } from "next-auth/react";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

type NavIconsProps = {
  className?: string;
  tabIndex?: number;
};

const NavIcons = ({ tabIndex }: NavIconsProps) => {
  // const { data: session } = useSession();
  // const avatar = session?.user?.image;
  // const name = session?.user?.name ?? "Korisnik";

  return (
    // <div className={clsx("flex items-center gap-8", className)}>
    //   {session ? (
      //   <Link
      //     href="/members"
      //     className="text-white"
      //     aria-label="Account"
      //     tabIndex={tabIndex}
      //   >
      //     {avatar ? (
      //       <Image
      //         src={avatar}
      //         alt={name}
      //         width={32}
      //         height={32}
      //         className="h-8 w-8 rounded-full ring-1 ring-white/20 object-cover"
      //       />
      //     ) : (
      //       <HiUser size={24} />
      //     )}
      //   </Link>
      // ) : (
        <div className="flex items-center gap-3">
          <Link
            href="https://www.instagram.com/kudantezaninovic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            tabIndex={tabIndex}
            className="cursor-pointer p-2.5 text-white transition-colors duration-300 rounded-4xl hover:bg-white/20"
          >
            <Image
              src="instagram-white-icon.svg"
              alt="Instagram"
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
              priority
            />
          </Link>

          <Link
            href="https://www.facebook.com/p/KUD-Ante-Zaninovic-100063625745937/?locale=hr_HR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            tabIndex={tabIndex}
            className="cursor-pointer p-2.5 text-white transition-colors duration-300 rounded-4xl hover:bg-white/20"
          >
            <Image
              src="facebook-white-icon.svg"
              alt="Facebook"
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
              priority
            />
          </Link>
        </div>
    //   )}
    // </div>
  );
};

type NavBarProps = {
  settings: Content.SettingsDocument;
};

// Optional auth button export (kept for future development)
export function LoginButton() {
  const { data: session } = useSession();
  return session ? (
    <button onClick={() => signOut()}>Sign out</button>
  ) : (
    <button onClick={() => signIn("google")}>Sign in with Google</button>
  );
}

export const NavBar = ({ settings }: NavBarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen((v) => !v);

  return (
    <header>
      {/* Top bar */}
      <div className="navbar fixed left-0 top-0 z-50 w-full bg-black text-white">
        <div className="flex items-center justify-between p-2 md:p-4">
          <button
            onClick={toggleDrawer}
            aria-label="Menu"
            className="cursor-pointer p-2 text-white transition-colors duration-300 hover:bg-white/20"
          >
            <HiBars3 size={24} />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="KUD Ante Zaninović"
                width={180}
                height={29}
                className="w-32 md:w-44"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex" >
            <NavIcons/>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={clsx(
          "nav-drawer-blur fixed inset-0 z-40 bg-black/40 opacity-0 transition-all duration-500",
          isDrawerOpen
            ? "pointer-events-auto opacity-100 backdrop-blur-xs"
            : "pointer-events-none backdrop-blur-none"
        )}
        onClick={toggleDrawer}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={clsx(
          "nav-drawer fixed left-0 top-0 z-50 h-full w-72 bg-neutral-900 p-6 transition-transform duration-500",
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-modal={isDrawerOpen}
      >
        <div className="mb-6 flex justify-end">
          <button
            className="p-2 text-white transition-colors duration-300 rounded-full hover:bg-white/10"
            onClick={toggleDrawer}
            aria-label="Close Menu"
            tabIndex={isDrawerOpen ? 0 : -1}
          >
            <HiXMark size={24} />
          </button>
        </div>

        <nav className="space-y-4" aria-label="Main Navigation">
          {settings.data.navigation_link.map((link) => (
            <PrismicNextLink
              field={link}
              onClick={() => setIsDrawerOpen(false)}
              key={link.key}
              className="block border-b border-white/10 py-2 text-xl font-semibold uppercase tracking-wide text-white hover:text-gray-300"
              tabIndex={isDrawerOpen ? 0 : -1}
            />
          ))}

          {/* Members link */}
          <Link
            href="/members"
            onClick={() => setIsDrawerOpen(false)}
            className="block border-b border-white/10 py-2 text-xl font-semibold uppercase tracking-wide text-white hover:text-gray-300"
            tabIndex={isDrawerOpen ? 0 : -1}
          >
            Članovi
          </Link>

          {/* Icons on mobile inside drawer */}
          <div className="pt-4 md:hidden flex justify-center">
            <NavIcons
              className="justify-center"
              tabIndex={isDrawerOpen ? 0 : -1}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};