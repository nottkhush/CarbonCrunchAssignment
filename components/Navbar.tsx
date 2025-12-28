"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhiteButton } from "./WhiteButton";
import { redirect } from "next/navigation";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-none relative">
      {/* Wrapper */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/Union.svg"
          alt="Company Logo"
          width={36}
          height={31}
          priority
          onClick={() => {redirect("/")}}
        />

        {/* Desktop Nav — EXACT SAME AS ORIGINAL */}
        <div className="hidden lg:flex bg-none w-[550px] h-[48px] items-center justify-between">
          <Link href="/about">About Us</Link>
          <Link href="/">Store</Link>
          <Link href="/">Games</Link>
          <WhiteButton text="Contact Us" onClick={() => {redirect("/contact")}} />
        </div>

        {/* Mobile / Tablet Hamburger ONLY */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md hover:bg-black/5 active:bg-black/10 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / Tablet Menu ONLY */}
      {open && (
        <div className="lg:hidden absolute right-4 top-[56px] w-[220px] rounded-xl border bg-white shadow-lg p-4 flex flex-col gap-4 z-50 text-black">
          <Link href="/about" onClick={() => setOpen(false)} className="text-black">
            About Us
          </Link>
          <Link href="/" onClick={() => setOpen(false)} className="text-black">
            Store
          </Link>
          <Link href="/" onClick={() => setOpen(false)} className="text-black">
            Games
          </Link>

          <div className="pt-2">
            <WhiteButton text="Connect Wallet" />
          </div>
        </div>
      )}
    </nav>
  );
};
