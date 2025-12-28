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
    <>
      

      <section className="mt-[135px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-[64px] font-semibold leading-[1] tracking-[1px]">
            Popular Artists
          </h1>

          <button className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-4 font-semibold text-black">
            View All Artists
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>

        {/* Artists row */}
        <div className="mt-[96px] flex justify-between">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="flex flex-col items-center gap-6"
            >
              {/* Avatar */}
              <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <p className="text-[36px] font-400">{artist.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};