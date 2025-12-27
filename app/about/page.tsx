import Image from "next/image";
import { poppins } from "@/app/layout";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="mt-[200px] max-w-[1200px] mx-auto px-6">
      {/* Hero */}
      <div className="grid grid-cols-2 items-center gap-[100px]">
        {/* Left content */}
        <div>
          <h1 className="text-[64px] font-semibold leading-[1] tracking-[1px] capitalize">
            About NFTme
          </h1>

          <p
            className={`${poppins.className} mt-[28px] max-w-[520px] text-[18px] tracking-[0.016em] opacity-80`}
          >
            NFTme is a next-generation NFT marketplace designed to empower
            artists and collectors to discover, trade, and showcase unique
            digital assets in a seamless and immersive experience.
          </p>

          <button className="mt-[48px] bg-gradient-to-b from-fuchsia-500 to-purple-800 text-[20px] w-[224px] h-[59px] font-[600] rounded-xl">
            EXPLORE
          </button>
        </div>

        {/* Right image */}
        <div className="relative h-[420px] w-full">
          <Image
            src="/About.png"
            alt="About NFTme visual"
            fill
            className="object-contain rounded-4xl"
          />
        </div>
      </div>

      {/* Mission & Vision Grid */}
      <div className="mt-[270px] grid grid-cols-2 gap-[100px]">
        {/* Mission */}
        <div>
          <h2 className="text-[48px] font-semibold leading-[1.25] tracking-[0.2px]">
            Our Mission
          </h2>

          <p
            className={`${poppins.className} mt-[28px] text-[18px] tracking-[0.016em] opacity-80 leading-relaxed`}
          >
            We aim to build a trusted ecosystem where creativity meets
            technology, enabling artists to monetize their work and collectors
            to own truly rare digital art. Our platform bridges the gap between
            traditional art markets and the decentralized future.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-[48px] font-semibold leading-[1.25] tracking-[0.2px]">
            Our Vision
          </h2>

          <p
            className={`${poppins.className} mt-[28px] text-[18px] tracking-[0.016em] opacity-80 leading-relaxed`}
          >
            To become the world&apos;s most trusted NFT marketplace, where every
            transaction is transparent, every artist is empowered, and every
            collector finds their next masterpiece. We&apos;re building the future of
            digital ownership.
          </p>
        </div>
      </div>

      {/* Why NFTme Section */}
      <div className="mt-[270px]">
        <div className="max-w-[520px]">
          <h2 className="text-[64px] font-semibold leading-[1] tracking-[1px] capitalize">
            Why NFTme?
          </h2>

          <p
            className={`${poppins.className} mt-[21px] text-[18px] tracking-[0.016em] opacity-80`}
          >
            Built for creators, designed for collectors, and powered by the
            latest Web3 technology to give you the best NFT experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-[148px] grid grid-cols-2 gap-[87px]">
          {/* Left Column */}
          <div className="flex flex-col gap-16">
            <FeatureCard
              title="Curated Collections"
              description="Hand-picked, high-quality NFT collections from verified artists around the world."
            />
            <FeatureCard
              title="Secure Transactions"
              description="Military-grade encryption and blockchain-verified authenticity for every trade."
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-16">
            <FeatureCard
              title="Artist-First Platform"
              description="Empowering creators with fair royalties, full ownership, and complete creative control."
            />
            <FeatureCard
              title="Modern Web3 UX"
              description="Seamless experience that feels like Web2, but powered by cutting-edge Web3 technology."
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-[270px] flex justify-between">
        <div className="flex flex-col">
          <span className="text-[48px] font-semibold tracking-[0.2px] leading-[1]">
            50k+
          </span>
          <p
            className={`${poppins.className} mt-2 text-[16px] tracking-tight opacity-80`}
          >
            Active Users
          </p>
        </div>

        <div className="flex flex-col">
          <span className="text-[48px] font-semibold tracking-[0.2px] leading-[1]">
            100k+
          </span>
          <p
            className={`${poppins.className} mt-2 text-[16px] tracking-tight opacity-80`}
          >
            NFTs Traded
          </p>
        </div>

        <div className="flex flex-col">
          <span className="text-[48px] font-semibold tracking-[0.2px] leading-[1]">
            $50M+
          </span>
          <p
            className={`${poppins.className} mt-2 text-[16px] tracking-tight opacity-80`}
          >
            Trading Volume
          </p>
        </div>

        <div className="flex flex-col">
          <span className="text-[48px] font-semibold tracking-[0.2px] leading-[1]">
            5k+
          </span>
          <p
            className={`${poppins.className} mt-2 text-[16px] tracking-tight opacity-80`}
          >
            Artists
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-[270px] mb-[200px] text-center">
        <h2 className="text-[64px] font-semibold leading-[1] tracking-[1px]">
          Ready to Get Started?
        </h2>

        <p
          className={`${poppins.className} mt-[28px] text-[18px] tracking-[0.016em] opacity-80 mx-auto max-w-[600px]`}
        >
          Join thousands of artists and collectors in the NFTme community today
        </p>

        <div className="mt-[48px] flex gap-6 justify-center">
          <button className="inline-flex items-center gap-2 bg-gradient-to-b from-fuchsia-500 to-purple-800 text-[20px] px-8 h-[59px] font-[600] rounded-xl">
            Start Creating <ArrowUpRight className="h-5 w-5" />
          </button>

          <button className="inline-flex items-center gap-2 bg-white text-black text-[20px] px-8 h-[59px] font-[600] rounded-xl">
            Explore Marketplace <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="text-[32px] font-semibold leading-[1.25] tracking-[0.2px]">
        {title}
      </h3>
      <p
        className={`${poppins.className} mt-[16px] text-[18px] tracking-[0.016em] opacity-80 leading-relaxed`}
      >
        {description}
      </p>
    </div>
  );
}