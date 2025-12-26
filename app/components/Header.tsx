"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full py-4 fixed backdrop-blur-md flex   z-20 shadow-2xl bg-[#e37243]/70">
      <div className="max-w-300 w-full mx-auto px-5 flex flex-col ">
        <Link href="/">
          <Image
          src={"/logo.png"}
          alt="Camindo Dorado Stays Logo"
          height={scrolled ? 50 : 100}
          width={scrolled ? 50 : 100}
          className="mb-2 transition-all duration-300"
        />
        </Link>
        <Link href="/">
        <h1
          className={` z-50 transition-all duration-300 ${
            scrolled ? "text-2xl" : "text-3xl"
          }`}
        >
          Camindo Dorado Stays
        </h1></Link>

      </div>
    </header>
  );
}
