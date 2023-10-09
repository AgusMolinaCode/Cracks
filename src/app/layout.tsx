import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import { ClerkProv } from "./ClerkProv";
import NavbarScroll from "@/components/sections/Navbar/NavbarScroll";
import Footer from "@/components/sections/Footer/Footer";

const inter = Poppins({
  weight: ["100", "400", "600", "800"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Falta 1",
  title: "Falta 1 - Futbol 5",
  description: "Encuentra jugadores y partidos para jugar futbol 5",
  keywords: ["Futbol 5", "Partidos", "Futbol", "Amigos", "Amigas"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: "url('/back.jpg')",
          backgroundSize: "cover",
          width: "100%",
          zIndex: -1,
          borderBottom: "2px solid #dcd5dc",
        }}
      >
        <ClerkProv>
          <Providers>
            <NavbarScroll />
            <main className={inter.className}>{children}</main>
            <Footer />
          </Providers>
        </ClerkProv>
      </body>
    </html>
  );
}
