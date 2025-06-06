"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Acerca" },
    { href: "/products", label: "Productos" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">MiApp</h1>

        {/* Botón hamburguesa (visible solo en móvil) */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Menú de escritorio */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-6">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} passHref>
                  <NavigationMenuLink asChild>
                    <a className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Menú móvil (solo visible cuando está abierto) */}
      {open && (
        <NavigationMenu className="lg:hidden mt-4">
          <NavigationMenuList className="flex flex-col space-y-2">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} passHref>
                  <NavigationMenuLink asChild>
                    <a
                      onClick={() => setOpen(false)}
                      className="block text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white px-2 py-1"
                    >
                      {link.label}
                    </a>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </nav>
  );
}
