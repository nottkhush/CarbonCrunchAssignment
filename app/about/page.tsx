import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { SkewedButton } from '@/components/SkewedButton';

interface FeatureCardProps {
  title: string;
  description: string;
}

interface StatCardProps {
  value: string;
  label: string;
}



const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="group">
    <h3 className="text-[22px] lg:text-[32px] font-semibold leading-tight tracking-wide">
      {title}
    </h3>
    <p className="mt-3 lg:mt-4 text-[16px] lg:text-[18px] text-white/80 leading-relaxed">
      {description}
    </p>
  </div>
);

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="flex flex-col items-center lg:items-start">
    <span className="text-[32px] lg:text-[56px] font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      {value}
    </span>
    <p className="mt-2 text-[14px] lg:text-[16px] text-white/80">
      {label}
    </p>
  </div>
);

const Background: React.FC = () => (
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#050008] via-[#0b0615] to-[#020005]">
    <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-black/80 rounded-full blur-[220px]" />
    <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-600/30 rounded-full blur-[160px]" />
    <div className="absolute top-1/2 left-1/4 w-[900px] h-[900px] bg-blue-900/30 rounded-full blur-[200px]" />
    <div className="absolute bottom-0 right-20 w-[600px] h-[600px] bg-fuchsia-600/25 rounded-full blur-[160px]" />
    <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-black/70 rounded-full blur-[220px]" />
  </div>
);

const HeroSection: React.FC = () => (
  <section className="pt-24 sm:pt-32 lg:pt-48 pb-20 lg:pb-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        <div className="space-y-6 lg:space-y-8">
          <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] font-bold leading-none tracking-tight">
            About NFTme
          </h1>
          
          <p className="text-[16px] lg:text-[18px] text-white/80 leading-relaxed max-w-lg">
            NFTme is a next-generation NFT marketplace designed to empower artists and collectors to discover, trade, and showcase unique digital assets in a seamless and immersive experience.
          </p>
          
          <SkewedButton text="EXPLORE" />
        </div>

        <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <span className="text-white/40 text-lg">
            <Image src="/About.png" alt="NFTme" width={500} height={500} className="rounded-2xl"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MissionVisionSection: React.FC = () => (
  <section className="py-20 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-[32px] lg:text-[48px] font-bold leading-tight">
            Our Mission
          </h2>
          <p className="text-[16px] lg:text-[18px] text-white/80 leading-relaxed">
            We aim to build a trusted ecosystem where creativity meets technology, enabling artists to monetize their work and collectors to own truly rare digital art.
          </p>
        </div>

        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-[32px] lg:text-[48px] font-bold leading-tight">
            Our Vision
          </h2>
          <p className="text-[16px] lg:text-[18px] text-white/80 leading-relaxed">
            To become the world's most trusted NFT marketplace, where every transaction is transparent and every artist is empowered.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const WhyNFTmeSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      title: "Curated Collections",
      description: "Hand-picked, high-quality NFT collections from verified artists."
    },
    {
      title: "Artist-First Platform",
      description: "Fair royalties, full ownership, complete control."
    },
    {
      title: "Secure Transactions",
      description: "Blockchain-verified authenticity for every trade."
    },
    {
      title: "Modern Web3 UX",
      description: "Feels like Web2, powered by Web3."
    }
  ];

  return (
    <section className="py-20 lg:py-22 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-4 lg:space-y-6">
          <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold leading-none tracking-tight">
            Why NFTme?
          </h2>
          <p className="text-[16px] lg:text-[18px] text-white/80">
            Built for creators, designed for collectors, and powered by Web3.
          </p>
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-16">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection: React.FC = () => {
  const stats: StatCardProps[] = [
    { value: "50k+", label: "Active Users" },
    { value: "100k+", label: "NFTs Traded" },
    { value: "$50M+", label: "Trading Volume" },
    { value: "5k+", label: "Artists" }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => (
  <section className="py-20 lg:py-32">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-bold leading-none tracking-tight">
        Ready to Get Started?
      </h2>
      
      <p className="mt-6 lg:mt-8 text-[16px] lg:text-[18px] text-white/80 max-w-2xl mx-auto">
        Join thousands of artists and collectors in the NFTme community today
      </p>

      <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <SkewedButton text="START CREATING" />
        
        <button className="inline-flex items-center gap-2 bg-white text-black text-[14px] lg:text-[16px] px-8 py-3 font-semibold rounded-md hover:bg-gray-100 transition-colors">
          Explore Marketplace 
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  </section>
);

export default function AboutPage(): React.ReactElement {
  return (
    <div className="min-h-screen text-white">
      <Background />
      <HeroSection />
      <MissionVisionSection />
      <WhyNFTmeSection />
      <StatsSection />
      <CTASection />
    </div>
  );
}