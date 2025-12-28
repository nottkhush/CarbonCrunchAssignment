import { poppins } from "@/app/layout";
import { Instagram, Facebook, Twitter } from "lucide-react";

const FooterPage = () => {
  return (
    <footer
      className="
        mt-24 sm:mt-32 lg:mt-[200px]
        w-full bg-white/10
        px-4 sm:px-6
        lg:pl-33.5 lg:pr-33.5 
      "
    >
      {/* Top row */}
      <div
        className="
          flex flex-col gap-8
          lg:flex-row lg:items-center lg:justify-between
          py-12
        "
      >
        {/* Logo */}
        <h2 className="text-[28px] lg:text-[36px] font-semibold text-center lg:text-left">
          NFTme
        </h2>

        {/* Navigation */}
        <nav
          className={`
            ${poppins.className}
            flex flex-col sm:flex-row
            items-center
            gap-4 sm:gap-8 lg:gap-[75px]
            text-[16px] md:justify-center md:w-full
          `}
        >
          <a href="#">Explore</a>
          <a href="#">Marketplace</a>
          <a href="#">Artists</a>
          <a href="/contact">Contact Us</a>
        </nav>

        {/* Social icons */}
        <div className="flex gap-4 justify-center lg:justify-end">
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
      <div
        className={`
          ${poppins.className}
          pb-8
          mt-8 lg:mt-[65px]
          text-[14px] lg:text-[16px]
          text-center lg:text-left
        `}
      >
        <p>
          Privacy policy &nbsp;|&nbsp; Copyright © Khushal Jain 2025.
          All Rights Reserved. &nbsp;|&nbsp; Terms of service
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;