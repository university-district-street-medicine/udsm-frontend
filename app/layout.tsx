import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UDSM",
  description: "",
};
// Navigation links
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Meet the Team", href: "/team" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Get Involved", href: "/join" },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="absolute z-10 flex items-center justify-between top-[3.8125rem] left-[6.25rem] right-[8.0625rem]">
          <Image src="/udsm_logo.jpg" alt="UDSM Logo" width={40} height={40} />
          <div className="flex gap-[2.5rem] items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.label === "Get Involved"
                    ? `${inter.className} font-semibold text-[1rem] leading-none text-[#092035] bg-[#F4BE37] w-[150px] h-[50px] rounded-[110px] flex items-center justify-center`
                    : `${inter.className} font-semibold text-[1rem] leading-none text-[#FFFFFF]`
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
