"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  // Gestionnaire d'événement pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animation de défilement fluide
    });
  };

  useEffect(() => {
    // Gestionnaire d'événement pour surveiller le scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Montre le bouton lorsque l'utilisateur a fait défiler au moins 100 pixels
        setShowScrollToTop(true);
      } else {
        // Masque le bouton si l'utilisateur est en haut de la page
        setShowScrollToTop(false);
      }
    };

    // Écoute les événements de scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoie le gestionnaire d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Le tableau vide [] signifie que cet effet est exécuté une seule fois lors du montage du composant

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
          <Link href="/cours">
            <li
              className="p-5 m-1 text-white bg-zinc-800/80 hover:bg-zinc-800"
              // className="p-5 m-1 hover:bg-zinc-800 hover:text-white font-bold"
              onClick={handleMenuItemClick}
            >
              Cours disponibles
            </li>
          </Link>
          <Link href="/evenements">
            <li
              // className="p-5 m-1 text-white bg-zinc-800/80 hover:bg-zinc-800"
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
          <Link href="/rejoindre">
            <li
              className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
              onClick={handleMenuItemClick}
            >
              Nous rejoindre
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
      {/*  */}
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

        {/* Bouton pour remonter en haut de la page */}
        {showScrollToTop && (
          <button
            className="fixed bottom-4 right-4 p-2 text-gray-800 bg-white rounded-full z-50"
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          >
            <ArrowUpwardIcon style={{ fontSize: "2rem" }} />
          </button>
        )}
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
            <Link href="/cours">
              <li
                // className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
                className="p-5 m-1 text-white bg-zinc-800/80 hover:bg-zinc-800"
                onClick={handleMenuItemClick}
              >
                Cours disponibles
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
            <Link href="/rejoindre">
              <button
                // className="p-5 m-1 text-white bg-zinc-800/80 hover:bg-zinc-800"
                className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
                onClick={handleMenuItemClick}
              >
                Nous rejoindre
              </button>
            </Link>
            <a target="_blank" href="https://www.lesjartdinsdemontagny.fr/">
              <li
                className="p-5 m-1 hover:bg-zinc-800 hover:text-white"
                onClick={handleMenuItemClick}
              >
                J&apos;ARTdins
              </li>{" "}
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
