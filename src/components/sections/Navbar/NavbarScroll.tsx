"use client";
import React from "react";
import { Poppins } from "next/font/google";
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
            <p className="font-bold text-2xl">CRACKS</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <div className={inter.className}>
            <Link href="#" className="font-semibold text-black">
              Mi Perfil
            </Link>
          </div>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="#" className="bg-[#0F52BA]">
            <div className={inter.className}>
              <p className="font-semibold text-white">Cerrar sesión</p>
            </div>
          </Button>
        </NavbarItem>
      </NavbarContent>
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
              href="#"
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
