import Image from "next/image";
import { poppins } from "@/app/layout";
import { ArrowUpRight } from "lucide-react";
import { SkewedButton } from "@/components/SkewedButton";

export default function AboutPage() {
  return (
    <>
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#050008] via-[#0b0615] to-[#020005]">
        {/* Top dark anchor */}
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-black/80 rounded-full blur-[220px]" />

        {/* Purple glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-600/30 rounded-full blur-[160px]" />

        {/* Blue depth */}
        <div className="absolute top-1/2 left-1/4 w-[900px] h-[900px] bg-blue-900/30 rounded-full blur-[200px]" />

        {/* Fuchsia accent */}
        <div className="absolute bottom-0 right-20 w-[600px] h-[600px] bg-fuchsia-600/25 rounded-full blur-[160px]" />

        {/* Bottom darkness */}
        <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-black/70 rounded-full blur-[220px]" />
      </div>
      <section className="mt-24 sm:mt-32 lg:mt-[200px] max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-[100px]">
          {/* Left content */}
          <div>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1] tracking-[1px] capitalize">
              About NFTme
            </h1>

            <p
              className={`${poppins.className} mt-4 lg:mt-[28px] max-w-[520px] mb-8 text-[16px] lg:text-[18px] tracking-[0.016em] opacity-80`}
            >
              NFTme is a next-generation NFT marketplace designed to empower
              artists and collectors to discover, trade, and showcase unique
              digital assets in a seamless and immersive experience.
            </p>

            <SkewedButton text="EXPLORE" />
          </div>

          {/* Right image */}
          <div className="relative h-[260px] sm:h-[340px] lg:h-[420px] w-full">
            <Image
              src="/About.png"
              alt="About NFTme visual"
              fill
              className="object-contain rounded-4xl"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 sm:mt-32 lg:mt-[270px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px]">
          <div>
            <h2 className="text-[28px] lg:text-[48px] font-semibold leading-[1.25] tracking-[0.2px]">
              Our Mission
            </h2>
            <p
              className={`${poppins.className} mt-4 lg:mt-[28px] text-[16px] lg:text-[18px] tracking-[0.016em] opacity-80 leading-relaxed`}
            >
              We aim to build a trusted ecosystem where creativity meets
              technology, enabling artists to monetize their work and collectors
              to own truly rare digital art.
            </p>
          </div>

          <div>
            <h2 className="text-[28px] lg:text-[48px] font-semibold leading-[1.25] tracking-[0.2px]">
              Our Vision
            </h2>
            <p
              className={`${poppins.className} mt-4 lg:mt-[28px] text-[16px] lg:text-[18px] tracking-[0.016em] opacity-80 leading-relaxed`}
            >
              To become the world&apos;s most trusted NFT marketplace, where
              every transaction is transparent and every artist is empowered.
            </p>
          </div>
        </div>

        {/* Why NFTme */}
        <div className="mt-24 sm:mt-32 lg:mt-[270px]">
          <div className="max-w-[520px]">
            <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1] tracking-[1px] capitalize">
              Why NFTme?
            </h2>

            <p
              className={`${poppins.className} mt-4 lg:mt-[21px] text-[16px] lg:text-[18px] tracking-[0.016em] opacity-80`}
            >
              Built for creators, designed for collectors, and powered by Web3.
            </p>
          </div>

          <div className="mt-16 lg:mt-[148px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[87px]">
            <div className="flex flex-col gap-12 lg:gap-16">
              <FeatureCard
                title="Curated Collections"
                description="Hand-picked, high-quality NFT collections from verified artists."
              />
              <FeatureCard
                title="Secure Transactions"
                description="Blockchain-verified authenticity for every trade."
              />
            </div>

            <div className="flex flex-col gap-12 lg:gap-16">
              <FeatureCard
                title="Artist-First Platform"
                description="Fair royalties, full ownership, complete control."
              />
              <FeatureCard
                title="Modern Web3 UX"
                description="Feels like Web2, powered by Web3."
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 sm:mt-32 lg:mt-[270px] grid grid-cols-2 sm:grid-cols-4 gap-8 lg:flex lg:justify-between">
          {[
            ["50k+", "Active Users"],
            ["100k+", "NFTs Traded"],
            ["$50M+", "Trading Volume"],
            ["5k+", "Artists"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="flex flex-col items-center lg:items-start"
            >
              <span className="text-[28px] lg:text-[48px] font-semibold leading-[1]">
                {value}
              </span>
              <p
                className={`${poppins.className} mt-2 text-[14px] lg:text-[16px] opacity-80`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 sm:mt-32 lg:mt-[270px] mb-24 lg:mb-[200px] text-center">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1] tracking-[1px]">
            Ready to Get Started?
          </h2>

          <p
            className={`${poppins.className} mt-4 lg:mt-[28px] text-[16px] lg:text-[18px] opacity-80 mx-auto max-w-[600px]`}
          >
            Join thousands of artists and collectors in the NFTme community
            today
          </p>

          <div className="mt-8 lg:mt-[48px] flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <SkewedButton text="START CREATING" />

            <button className="inline-flex items-center gap-2 bg-white text-black text-[16px] lg:text-[20px] px-8 h-[52px] lg:h-[59px] font-[600] rounded-md">
              Explore Marketplace <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// Feature Card
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="text-[22px] lg:text-[32px] font-semibold leading-[1.25] tracking-[0.2px]">
        {title}
      </h3>
      <p
        className={`${poppins.className} mt-3 lg:mt-[16px] text-[16px] lg:text-[18px] opacity-80 leading-relaxed`}
      >
        {description}
      </p>
    </div>
  );
}
