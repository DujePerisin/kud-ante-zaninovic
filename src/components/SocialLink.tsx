"use client";

import { MouseEvent } from "react";

type SocialLinkProps = {
  label: string;
  appUrl: string;
  webUrl: string;
};

export const SocialLink = ({ label, appUrl, webUrl }: SocialLinkProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const start = Date.now();

    window.location.href = appUrl;

    setTimeout(() => {
      if (Date.now() - start < 1200) {
        window.location.href = webUrl;
      }
    }, 700);
  };

  return (
    <li>
      <a
        href={appUrl}
        onClick={handleClick}
        className="hover:text-gray-300"
        aria-label={label}
      >
        {label}
      </a>
    </li>
  );
};
