import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";


export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-black py-16">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          <NavGroup title="O Nama">
            <NavLink href="#" target="_blank" rel="noopener noreferrer">
              Novosti
            </NavLink>
            <NavLink href="https://www.google.com/maps/place/Beach+Stara+%C5%A1kola/@43.5482484,16.3871351,20.73z/data=!4m6!3m5!1s0x13355d3f07746de1:0x748f1676a49e932c!8m2!3d43.5482254!4d16.3873749!16s%2Fg%2F11k69kbmjn?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              Lokacija
            </NavLink>
            <NavLink href="/terms/" target="_blank" rel="noopener noreferrer">
              Pravila Privatnosti
            </NavLink>
          </NavGroup>

          <NavGroup title="Mreže">
            <NavLink href="https://www.instagram.com/kudantezaninovic/" target="_blank" rel="noopener noreferrer">
              Instagram
            </NavLink>
            <NavLink href="https://www.facebook.com/p/KUD-Ante-Zaninovic-100063625745937/?locale=hr_HR" target="_blank" rel="noopener noreferrer">
              Facebook
            </NavLink>
            <NavLink href="https://www.hrvatskifolklor.net/php/kudovi/kudantezaninovic.php" target="_blank" rel="noopener noreferrer">
              HR Folk Net
            </NavLink>
          </NavGroup>

          <NavGroup title="O Nama">
            <NavLink href="#" target="_blank" rel="noopener noreferrer">
              Novosti
            </NavLink>
            <NavLink href="https://www.google.com/maps/place/Beach+Stara+%C5%A1kola/@43.5482484,16.3871351,20.73z/data=!4m6!3m5!1s0x13355d3f07746de1:0x748f1676a49e932c!8m2!3d43.5482254!4d16.3873749!16s%2Fg%2F11k69kbmjn?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              Lokacija
            </NavLink>
            <NavLink href="/terms/" target="_blank" rel="noopener noreferrer">
              Pravila Privatnosti
            </NavLink>
          </NavGroup>

        </div>

        {/* Bottom footer */}
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
    <h3
      id={`${title.toLowerCase()}-heading`}
      className="mb-6 text-xl font-medium"
    >
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

const NavLink = ({ href, children, target, rel }: NavLinkProps) => {
  return (
    <li>
      <Link href={href} className="hover:text-gray-300" target={target} rel={rel}>
        {children}
      </Link>
    </li>
  );
};
