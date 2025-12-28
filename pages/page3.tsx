import { poppins } from "@/app/layout";
import { ArtCard } from "@/components/ArtCard";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";

export const Page3 = () => {
  return (
    <>
      

      <section className="mt-[270px]">
        {/* Heading */}
        <div className="max-w-[520px]">
          <h1 className="font-semibold text-[64px] leading-[1] tracking-[1px] capitalize whitespace-nowrap">
            Trending This Week
          </h1>

          <p
            className={`${poppins.className} mt-[21px] text-[18px] font-normal  tracking-[0.016em] opacity-80`}
          >
            Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          {/* Grid */}
          <div className=" grid grid-cols-2 gap-[87px]">
            {/* Left column */}
            <div className="mt-[148px] flex flex-col gap-16">
              <ArtCard
                name="Sebastian"
                image="/work/Sebastian.png"
                price="2.3 ETH"
              />
              <ArtCard
                name="Javier Miranda"
                image="/work/Javier.png"
                price="2.3 ETH"
              />
              <ArtCard
                name="Milad Fakurian"
                image="/work/Milad.png"
                price="2.3 ETH"
              />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-16">
              <ArtCard
                name="Ferhat Deniz"
                image="/work/Ferhat.png"
                price="2.3 ETH"
              />
              <ArtCard
                name="Polina Kondrashova"
                image="/work/Polina.png"
                price="2.3 ETH"
              />
              <ArtCard
                name="Erick Butler"
                image="/work/Erick.png"
                price="2.3 ETH"
              />
              <div className="flex justify-end mt-[24px]">
                <button className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 font-semibold text-black">
                  Explore More <ArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Explore more button */}
      </section>
    </>
  );
};