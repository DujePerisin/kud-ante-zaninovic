// import { ReactNode } from "react";
// import Link from "next/link";
// import Image from "next/image";


// export const Footer = () => {
//   return (
//     <footer aria-labelledby="footer-heading" className="bg-black py-16">
//       <h2 id="footer-heading" className="sr-only">
//         Footer
//       </h2>
//       <div className="container mx-auto px-6">
//         <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
//           <NavGroup title="Informacije">
//             <NavLink href="https://www.google.com/maps/place/Beach+Stara+%C5%A1kola/@43.5482484,16.3871351,20.73z/data=!4m6!3m5!1s0x13355d3f07746de1:0x748f1676a49e932c!8m2!3d43.5482254!4d16.3873749!16s%2Fg%2F11k69kbmjn?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
//               Lokacija
//             </NavLink>
//             <NavLink href="/members" target="_blank" rel="noopener noreferrer">
//               Članovi
//             </NavLink>
//             <NavLink href="/terms/" target="_blank" rel="noopener noreferrer">
//               Pravila Privatnosti
//             </NavLink>
//           </NavGroup>

//           <NavGroup title="Mreže">
//             <NavLink href="https://www.instagram.com/kudantezaninovic/" target="_blank" rel="noopener noreferrer">
//               Instagram
//             </NavLink>
//             <NavLink href="https://www.facebook.com/p/KUD-Ante-Zaninovic-100063625745937/?locale=hr_HR" target="_blank" rel="noopener noreferrer">
//               Facebook
//             </NavLink>
//             <NavLink href="https://www.hrvatskifolklor.net/php/kudovi/kudantezaninovic.php" target="_blank" rel="noopener noreferrer">
//               HR Folk Net
//             </NavLink>
//           </NavGroup>

//           <NavGroup title="Više">
//             <NavLink href="#" rel="noopener noreferrer">
//               Početna
//             </NavLink>
//             <NavLink href="/about" rel="noopener noreferrer">
//               O nama
//             </NavLink>
//             <NavLink href="/gallery" rel="noopener noreferrer">
//               Galerija
//             </NavLink>
//           </NavGroup>

//         </div>

//         <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-8 md:flex-row">
//           <p className="text-center text-sm text-gray-400">
//             © {new Date().getFullYear()} KUD Ante Zaninović
//           </p>
//           <Link
//             href="/"
//             aria-label="KUD Ante Zaninović Home"
//             className="order-first md:order-none"
//           >
//             <Image src="/icon.png" alt="KUD Ante Zaninovic" width={150} height={25} />
//           </Link>
//           <ul
//             aria-label="Legal"
//             className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
//           >
//             <li>
//               <Link href="/terms/" className="hover:text-white">
//                 Uvjeti &amp; odredbe
//               </Link>
//             </li>
//             <li>
//               <Link href="/terms/" className="hover:text-white">
//                 Pravila privatnosti
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// type NavGroupProps = {
//   title: string;
//   children?: ReactNode;
// };

// const NavGroup = ({ title, children }: NavGroupProps) => (
//   <nav aria-labelledby={`${title.toLowerCase()}-heading`}>
//     <h3
//       id={`${title.toLowerCase()}-heading`}
//       className="mb-6 text-xl font-medium"
//     >
//       {title}
//     </h3>
//     <ul className="space-y-4" role="list">
//       {children}
//     </ul>
//   </nav>
// );

// type NavLinkProps = {
//   href: string;
//   children: ReactNode;
//   target?: string;
//   rel?: string;
// };

// const NavLink = ({ href, children, target, rel }: NavLinkProps) => {
//   return (
//     <li>
//       <Link href={href} className="hover:text-gray-300" target={target} rel={rel}>
//         {children}
//       </Link>
//     </li>
//   );
// };


import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialLink } from "./SocialLink";

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-black py-16">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          <NavGroup title="Informacije">
            <NavLink
              href="https://www.google.com/maps/place/Beach+Stara+%C5%A1kola/@43.5482484,16.3871351,20.73z/data=!4m6!3m5!1s0x13355d3f07746de1:0x748f1676a49e932c!8m2!3d43.5482254!4d16.3873749!16s%2Fg%2F11k69kbmjn?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lokacija
            </NavLink>
            <NavLink href="/members" target="_blank" rel="noopener noreferrer">
              Članovi
            </NavLink>
            <NavLink href="/terms/" target="_blank" rel="noopener noreferrer">
              Pravila privatnosti
            </NavLink>
          </NavGroup>

          <NavGroup title="Mreže">
            <SocialLink
              label="Instagram"
              appUrl="instagram://user?username=kudantezaninovic"
              webUrl="https://www.instagram.com/kudantezaninovic/"
            />
            <SocialLink
              label="Facebook"
              appUrl="fb://page/100063625745937"
              webUrl="https://www.facebook.com/p/KUD-Ante-Zaninovic-100063625745937/"
            />
            <NavLink
              href="https://www.hrvatskifolklor.net/php/kudovi/kudantezaninovic.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              HR Folk Net
            </NavLink>
          </NavGroup>

          <NavGroup title="Više">
            <NavLink href="/" rel="noopener noreferrer">
              Početna
            </NavLink>
            <NavLink href="/about" rel="noopener noreferrer">
              O nama
            </NavLink>
            <NavLink href="/gallery" rel="noopener noreferrer">
              Galerija
            </NavLink>
          </NavGroup>
        </div>

        <div className="mt-20 flex flex-col items-center text-center space-y-4">
          <Link
            href="https://www.portal.hr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portal Grada Kaštela"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/portal-grada-kaštela-1.png"
              alt="Portal Grada Kaštela"
              width={80}
              height={80}
              className="opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="max-w-sm text-sm text-gray-400">
            Sve slike koje se nalaze na našoj stranici prikupljene su s <strong className="text-nowrap"><Link href="https://www.portal.hr/" className="hover:text-white">Portala grada Kaštela</Link></strong> koji nas prati na svim našim lokalnim nastupima. Više o uvjetima pročitajte <Link href="/terms/" className="hover:text-white font-bold">ovdje.</Link>
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-neutral-800 pt-8 md:flex-row">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} KUD Ante Zaninović
          </p>
          <Link
            href="/"
            aria-label="KUD Ante Zaninović Home"
            className="order-first md:order-none"
          >
            <Image src="/icon.png" alt="KUD Ante Zaninovic" width={150} height={25} />
          </Link>
          <ul
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <li>
              <Link href="/terms/" className="hover:text-white">
                Uvjeti &amp; odredbe
              </Link>
            </li>
            <li>
              <Link href="/terms/" className="hover:text-white">
                Pravila privatnosti
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

type NavGroupProps = {
  title: string;
  children?: ReactNode;
};

const NavGroup = ({ title, children }: NavGroupProps) => (
  <nav aria-labelledby={`${title.toLowerCase()}-heading`}>
    <h3 id={`${title.toLowerCase()}-heading`} className="mb-6 text-xl font-medium">
      {title}
    </h3>
    <ul className="space-y-4" role="list">
      {children}
    </ul>
  </nav>
);

type NavLinkProps = {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

const NavLink = ({ href, children, target, rel }: NavLinkProps) => (
  <li>
    <Link href={href} className="hover:text-gray-300" target={target} rel={rel}>
      {children}
    </Link>
  </li>
);
