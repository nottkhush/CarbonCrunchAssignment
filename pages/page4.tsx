import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const artists = [
  { name: "Ferhat Deniz", image: "/artists/Ferhat.jpg" },
  { name: "Sebastian", image: "/artists/Sebastian.jpg" },
  { name: "Javier Miranda", image: "/artists/Javier.jpg" },
  { name: "Erick Butler", image: "/artists/Erick.jpg" },
];

export const Page4 = () => {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-[135px]">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1] tracking-[1px]">
          Popular Artists
        </h1>

        <button className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 font-semibold text-black w-fit">
          View All Artists
          <ArrowUpRight className="h-5 w-5" />
        </button>
      </div>

      {/* Artists */}
      <div
        className="
          mt-12 sm:mt-16 lg:mt-[96px]
          grid grid-cols-2 sm:grid-cols-2 lg:flex
          gap-12 lg:gap-0
          lg:justify-between
        "
      >
        {artists.map((artist) => (
          <div
            key={artist.name}
            className="flex flex-col items-center gap-6"
          >
            {/* Avatar */}
            <div className="relative h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] lg:h-[170px] lg:w-[170px]  overflow-hidden rounded-full">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Name */}
            <p className="text-[18px] sm:text-[24px] lg:text-[36px] font-400 text-center">
              {artist.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
