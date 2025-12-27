import { poppins } from "@/app/layout";
import { Instagram, Facebook, Twitter } from "lucide-react";

export const FooterPage = () => {
  return (
    <footer className="mt-[200px] w-full bg-white/10 pl-33.5 pr-33.5">
      {/* Top row */}
      <div className="flex items-center justify-between py-12">
        {/* Logo */}
        <h2 className="text-[36px] font-semibold">NFTme</h2>

        {/* Navigation */}
        <nav className={`${poppins.className} flex gap-[75px] text-[16px]`}>
          <a href="#">Explore</a>
          <a href="#">Marketplace</a>
          <a href="#">Artists</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Social icons */}
        <div className="flex gap-4">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-black">
            <Instagram size={18} />
          </div>
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-black">
            <Facebook size={18} />
          </div>
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-black">
            <Twitter size={18} />
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className={`${poppins.className} pb-8 text-[16px] mt-[65px]`}>
        <p>
          Privacy policy &nbsp;|&nbsp; Copyright © Khushal Jain 2025.
          All Rights Reserved. &nbsp;|&nbsp; Terms of service
        </p>
      </div>
    </footer>
  );
};
