"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, MessageCircleMore, X } from "lucide-react";

const navigation: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "Tours", href: "/tours" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            TravelDreams
          </Link>
          <div className="flex items-center">
            <nav className="hidden sm:flex  bg-white">
              <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 p-4 sm:p-0">
                {navigation.map(({ href, title }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-blue-600 block py-2 sm:py-0"
                      onClick={toggleMenu}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } flex-col sm:hidden absolute left-0 top-16 w-full bg-white shadow-md`}
            >
              <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 p-4 sm:p-0">
                {navigation.map(({ href, title }) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-blue-600 block py-2 sm:py-0"
                      onClick={toggleMenu}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="ml-4 flex items-center">
              <Button>
                <Link
                  className="flex items-center gap-1"
                  target="_blank"
                  href="https://wa.me/254737605955"
                >
                  <MessageCircleMore />
                  <span className="hidden md:block">Chat on WhatsApp</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="sm:hidden ml-2"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
