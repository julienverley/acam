"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
          className="p-2 text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
            // } absolute top-0 left-0 w-full h-screen bg-white`}
          } absolute top-0 left-0 w-full h-fit bg-yellow-300 z-20`}
        >
          {/* <ul className="flex flex-col items-center pt-24"> */}
          <ul className="flex flex-col items-center pt-6">
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
            {/* <Link href="/jartdins"> */}
            <a target="_blank" href="https://www.lesjartdinsdemontagny.fr/">
              <li
                className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
                onClick={handleMenuItemClick}
              >
                JARTdins
              </li>{" "}
            </a>
            {/* <li
                className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
                onClick={handleMenuItemClick}
              >
                JARTdins
              </li> */}
            {/* </Link> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
