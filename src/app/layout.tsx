import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const pixelify = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Explore detailed information about Pokémon species",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className="font-HakgyoansimWoojuR bg-pixel-img bg-cover bg-center bg-no-repeat bg-fixed">
          <Link href="/">
            <div
              className={`text-5xl font-semibold m-10 ${pixelify.className}`}
            >
              Pokédex
            </div>
          </Link>

          {children}
        </body>
      </html>
    </>
  );
}
