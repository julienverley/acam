import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    // <header className="relative flex items-center justify-between px-6 h-24 mb-6 bg-stone-300">
    <header className="relative flex items-center justify-between px-6 h-24 mb-6 bg-yellow-300 lg:mb-24">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          style={{ objectFit: "cover" }}
          width={200}
          height={100}
        />
      </Link>
      <div className="hidden lg:block">
        {/* <ul className="flex space-x-6 items-center"> */}
        <ul className="flex items-center">
          <Link href="/rejoindre">
            <button className="p-6 text-white bg-zinc-800/80 hover:bg-zinc-800">
              Rejoindre l&lsquo;association
            </button>
          </Link>
          <Link href="/cours">
            <li className="p-6 hover:bg-zinc-800 hover:text-white">Cours</li>
          </Link>
          <Link href="/evenements">
            <li className="p-4 hover:bg-zinc-800 hover:text-white">
              Evénements
            </li>
          </Link>
          <Link href="/jartdins">
            <li className="p-6 hover:bg-zinc-800 hover:text-white">JARTdins</li>
          </Link>
          <Link href="/souvenirs">
            <li className="p-6 hover:bg-zinc-800 hover:text-white">
              Souvenirs
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
