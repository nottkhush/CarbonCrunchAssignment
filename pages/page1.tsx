import { poppins } from "@/app/layout";
import { Navbar } from "@/components/Navbar";
import { SkewedButton } from "@/components/SkewedButton";
import Image from "next/image";

const Page1 = () => {
  return (
    <>
      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#050008] via-[#0b0615] to-[#020005]">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-black/80 rounded-full blur-[200px]" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-600/35 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/3 w-[800px] h-[800px] bg-blue-900/35 rounded-full blur-[180px]" />
        <div className="absolute bottom-10 right-20 w-[600px] h-[600px] bg-fuchsia-600/30 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 left-[-10%] w-[450px] h-[450px] bg-cyan-400/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-black/70 rounded-full blur-[220px]" />
      </div>

      {/* ================= HERO ================= */}
      <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1  lg:grid-cols-2">
        {/* ================= LEFT ================= */}
        <div className="mt-12 md:justify-center md:place-items-center lg:place-items-start">
          <h1 className="font-semibold text-[40px] sm:text-[56px] lg:text-[72px] leading-tight">
            Discover Rare <br /> Collections Of <br /> Art & NFT&apos;s
          </h1>

          <p
            className={`${poppins.className} mt-4 text-[16px] lg:text-[18px] tracking-[0.016em] font-medium`}
          >
            Create, Explore, & Collect Digital Art NFTs
          </p>

          <div className="mt-8 lg:mt-14">
            <SkewedButton text="EXPLORE" />
          </div>

          <div className="mt-16 flex gap-12">
            {[
              ["32k+", "Artwork"],
              ["20k+", "Auctions"],
              ["10k+", "Artists"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="text-[32px] lg:text-[48px] font-semibold">
                  {num}
                </p>
                <p className="text-white/80">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT STACK ================= */}
        <div className="relative hidden  sm:flex justify-center ml-40 md:mt-[30px] ">
          {/* BACK IMAGE (ROTATED) */}
          <div className="z-10">
            <Image
              src="/stack-back.svg"
              alt="back"
              width={373}
              height={414}
              className="absolute -left-35 top-8 md:left-[-99px] lg:left-[-160px] w-[393px] h-[434px]  z-10"
            />
            <div
              className="absolute bottom-[-70px] left-[-36px] mb-28.25 lg:left-[-57px]  md:mb-[-60px] md:left-[5px] w-[313px] h-[148px]
              bg-white/10 backdrop-blur-xl border border-white/20
              shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:mb-29 -rotate-15 overflow-hidden z-30"
            >
              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/50 via-fuchsia-400/40 to-indigo-500/40" />

              {/* content */}
              <div className="relative p-4 text-white">
                {/* top row */}
                <div className="flex justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="w-10 h-10 rounded-full"
                      alt="Laura"
                    />
                    <div>
                      <p className="font-semibold">Laura</p>
                      <p className="text-sm text-white/70">0.21 Weth</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-white/70">Remaining Time</p>
                    <p className="font-semibold">18h : 57m : 14s</p>
                  </div>
                </div>

                {/* bottom row */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-white/70">Current Bid</p>
                    <p className="text-xl font-bold">2.8 ETH</p>
                  </div>

                  <button className="bg-white text-black px-6 py-3 font-semibold uppercase text-xs tracking-widest">
                    Place a Bid
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* FRONT STACK */}
          <div className="relative z-20">
            {/* FRONT IMAGE (STRAIGHT) */}
            <Image
              src="/stack-front.svg"
              alt="front"
              width={373}
              height={414}
              className="w-[393px] h-[434px]"
            />

            {/* GLASS CARD */}
            <div
              className="absolute bottom-[-70px] mb-24 md:mb-[-78px] w-[392px] h-[148px]
              bg-white/10 backdrop-blur-xl border md:mb-1 lg:mb-24  border-white/20
              shadow-[0_30px_80px_rgba(0,0,0,0.45)] overflow-hidden z-30"
            >
              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/50 via-fuchsia-400/40 to-indigo-500/40" />

              {/* content */}
              <div className="relative p-4 text-white">
                {/* top row */}
                <div className="flex justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100"
                      className="w-10 h-10 rounded-full"
                      alt="Laura"
                    />
                    <div>
                      <p className="font-semibold">Laura</p>
                      <p className="text-sm text-white/70">0.21 Weth</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-white/70">Remaining Time</p>
                    <p className="font-semibold">18h : 57m : 14s</p>
                  </div>
                </div>

                {/* bottom row */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-white/70">Current Bid</p>
                    <p className="text-xl font-bold">2.8 ETH</p>
                  </div>

                  <button className="bg-white text-black px-6 py-3 font-semibold uppercase text-xs tracking-widest">
                    Place a Bid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;