"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between px-6 h-24 bg-yellow-300">
      <Link href="/">
        <Image
          src="/images/logos/logo.png"
          alt="logo"
          style={{ objectFit: "cover" }}
          width={200}
          height={100}
        />
      </Link>
      {/* Desktop menu */}
      <div className="hidden lg:block">
        <ul className="flex items-center">
          <Link href="/rejoindre">
            <button
              className="p-5 m-1 text-white bg-zinc-800/80 hover:bg-zinc-800"
              onClick={handleMenuItemClick}
            >
              Rejoindre l&lsquo;association
            </button>
          </Link>
          <Link href="/cours">
            <li
              className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
              onClick={handleMenuItemClick}
            >
              Cours
            </li>
          </Link>
          <Link href="/evenements">
            <li
              className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
              onClick={handleMenuItemClick}
            >
              Evénements
            </li>
          </Link>
          <Link href="/souvenirs">
            <li
              className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
              onClick={handleMenuItemClick}
            >
              Souvenirs
            </li>
          </Link>
          <a target="_blank" href="https://www.lesjartdinsdemontagny.fr/">
            <li
              className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
              onClick={handleMenuItemClick}
            >
              JARTdins
            </li>{" "}
          </a>
        </ul>
      </div>
      <div className="block lg:hidden">
        <button
          className="p-2 text-gray-800 relative z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="z-30">
            {isMenuOpen ? (
              <CloseIcon style={{ fontSize: "2rem" }} />
            ) : (
              <MenuIcon style={{ fontSize: "2rem" }} />
            )}
          </span>
        </button>
        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-fit bg-yellow-300 z-20`}
        >
          <ul className="flex flex-col items-center pt-10">
            <Link href="/">
              <button
                className="p-5 m-1 text-black hover:bg-zinc-800 hover:text-white"
                onClick={handleMenuItemClick}
              >
                Page d&lsquo;accueil
              </button>
            </Link>
            <Link href="/rejoindre">
              <button
                className="p-5 m-1 text-white bg-zinc-800/80 hover:bg-zinc-800"
                onClick={handleMenuItemClick}
              >
                Rejoindre l&lsquo;association
              </button>
            </Link>
            <Link href="/cours">
              <li
                className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
                onClick={handleMenuItemClick}
              >
                Cours
              </li>
            </Link>
            <Link href="/evenements">
              <li
                className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
                onClick={handleMenuItemClick}
              >
                Evénements
              </li>
            </Link>
            <Link href="/souvenirs">
              <li
                className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
                onClick={handleMenuItemClick}
              >
                Souvenirs
              </li>
            </Link>
            <a target="_blank" href="https://www.lesjartdinsdemontagny.fr/">
              <li
                className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
                onClick={handleMenuItemClick}
              >
                JARTdins
              </li>{" "}
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
