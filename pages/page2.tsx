import { poppins } from "@/app/layout";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Page2 = () => {
  return (
    <div
      className="
        mt-24 sm:mt-32 lg:mt-[352px]
        grid grid-cols-1 lg:grid-cols-2
        gap-12 lg:gap-[111px] md:mt-[290px]
        items-center
        text-white md:place-items-center
      "
    >
      {/* Left Image */}
      <Image
        src="/BitcoinArtWork.svg"
        alt="Bitcoin Art Work"
        width={690}
        height={690}
        className="rounded-2xl w-full  max-w-[420px] sm:max-w-[520px] lg:max-w-none mx-auto lg:mx-0"
      />

      {/* Right Content */}
      <div className="flex flex-col">
        {/* Title */}
        <h1 className="font-medium text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.25] tracking-[0.2px]">
          Bitcoin <br /> Art Work
        </h1>

        {/* Creator */}
        <p className={`${poppins.className} mt-6 lg:mt-[36px] text-sm`}>
          Created by <span className="text-[#DD24E1]">Jonathan Borba</span>
        </p>

        {/* Bid + Timer */}
        <div
          className={`${poppins.className} mt-8 lg:mt-[48px] flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-10`}
        >
          {/* Current Bid */}
          <div className="flex flex-col gap-2">
            <span className="text-sm opacity-80">Current Bid</span>
            <span className="text-[28px] lg:text-[36px] font-semibold leading-[1.25] tracking-[0.2px]">
              1.09 ETH
            </span>
            <span className="text-sm opacity-80">$1,835</span>
          </div>

          {/* Divider (desktop only) */}
          <div className="hidden sm:block h-24 w-px bg-white/30" />

          {/* Auction Ends */}
          <div className="flex flex-col gap-3">
            <span className="text-sm opacity-80">Auction Ends In</span>

            <div className="flex gap-6 sm:gap-10">
              {[
                ["18", "Hours"],
                ["57", "Minutes"],
                ["14", "Seconds"],
              ].map(([value, label]) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="text-[24px] lg:text-[32px] font-semibold leading-[1.25] tracking-[0.2px]">
                    {value}
                  </span>
                  <span className="text-sm opacity-80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          className="
            mt-8 lg:mt-[48px]
            inline-flex items-center gap-2
            w-fit
            rounded-md
            bg-white
            px-6 py-4
            text-black
            font-semibold
          "
        >
          View Art Work
          <ArrowUpRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Page2;