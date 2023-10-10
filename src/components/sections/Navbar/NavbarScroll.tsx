"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Signed from "@/components/sections/Navbar/Signed";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const inter = Poppins({
  weight: ["100", "400", "600", "800"],
  style: "normal",
  subsets: ["latin"],
});

export default function NavbarScroll() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Mi perfil", "Mis partidos", "Cerrar sesión"];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      className=" backdrop-blur-sm bg-white/60"
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className={inter.className}>
            <Link href="/">
            <p className="font-bold text-2xl text-black">CRACKS</p>
            </Link>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <SignedIn>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <div className={inter.className}>
              <Link href="/perfil" className="font-semibold text-black">
                Mi Perfil
              </Link>
            </div>
          </NavbarItem>
        </NavbarContent>
        <Signed />
      </SignedIn>
      <SignedOut>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} href="/sign-in" className="bg-[#0F52BA]">
              <div className={inter.className}>
                <p className="font-semibold text-white">Iniciar sesión</p>
              </div>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </SignedOut>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="/perfil"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
