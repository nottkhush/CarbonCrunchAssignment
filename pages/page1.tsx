import { poppins } from "@/app/layout";
import { Navbar } from "@/components/Navbar";
import { SkewedButton } from "@/components/SkewedButton";
import Image from "next/image";

export const Page1 = () => {
  return (
    <>
      

      <Navbar />
      <div className="grid grid-cols-2">
        <div className="w-127.5  mt-25.5">
          <h1 className="font-semibold text-[72px] leading-tight pt-7.5">
            Discover Rare <br /> Collections Of <br /> Art & NFT&apos;s
          </h1>
          <p
            className={`${poppins.className} pt-5 text-[18px] tracking-[0.016em] font-medium leading-none `}
          >
            Create, Explore, & Collect Digital Art NFTs
          </p>
          <div className="mt-[59px]">
            <SkewedButton text="EXPLORE" />
          </div>
          <div className="mt-[164px] flex justify-between">
            <div className="flex flex-col">
              <span className="text-[48px] font-semibold tracking-[0.2px] leading-[1]">
                32k+
              </span>
              <p className="text-[16px] text-white tracking-tight">Artwork</p>
            </div>

            <div className="flex flex-col">
              <span className="text-[48px] font-semibold tracking-[0.2px] leading-[1]">
                20k+
              </span>
              <p className="text-[16px] text-white tracking-tight">Auctions</p>
            </div>

            <div className="flex flex-col">
              <span className="text-[48px] font-semibold tracking-[0.2px] leading-[1]">
                10k+
              </span>
              <p className="text-[16px] text-white tracking-tight">Artists</p>
            </div>
          </div>
        </div>
        <div className="w-[545.03px] h-[653px] mt-[105px] ml-[31px]">
            <Image src="/heroimagewrapper.svg" alt="image" width={545.03} height={653} />
        </div>
      </div>
    </>
  );
};