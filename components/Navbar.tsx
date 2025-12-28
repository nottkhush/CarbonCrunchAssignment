import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { WhiteButton } from "./WhiteButton";

export const Navbar = () => {
  return (
    <nav className="w-full bg-none">
      <div>
        <div className="flex justify-between">
          <Image
            src="/union.svg"
            alt="Company Logo"
            width={36}
            height={31}
            priority
          />
          <div className="bg-none w-[550px] h-[48px] flex items-center justify-between px-8">
            <Link href="/about">About Us</Link>
            <Link href="/">Store</Link>
            <Link href="/">Games</Link>
            <WhiteButton text="Connect Wallet" />
          </div>
        </div>
      </div>
    </nav>
  );
};
