"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
            <nav
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } absolute top-full left-0 right-0 bg-white shadow-md flex-col sm:flex sm:flex-row sm:static sm:shadow-none`}
            >
              <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 p-4 sm:p-0">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-blue-600 block py-2 sm:py-0"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tours"
                    className="text-gray-600 hover:text-blue-600 block py-2 sm:py-0"
                    onClick={toggleMenu}
                  >
                    Tours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-gray-600 hover:text-blue-600 block py-2 sm:py-0"
                    onClick={toggleMenu}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-blue-600 block py-2 sm:py-0"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="ml-4 flex items-center">
              {/* <Button>
                <Link target="_blank" href="https://wa.me/254737605955">
                  Chat on WhatsApp
                </Link>
              </Button> */}
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
