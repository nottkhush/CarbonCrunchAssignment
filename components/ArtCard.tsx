import { poppins } from "@/app/layout";
import Image from "next/image";

type ArtCardProps = {
  name: string;
  image: string;
  price: string;
  collection?: string;
};

export const ArtCard = ({
  name,
  image,
  price,
  collection = "Golden Flower",
}: ArtCardProps) => {
  return (
    <div>
      {/* Meta */}
      <div className="mb-3  ">
        <p className="text-[28px] font-medium">{name}</p>
        <div className="flex justify-between items-center">
          <p className="text-[12px]">{collection}</p>
          <span className={`${poppins.className} text-[16px] text-[#DD24E1]`}>
            {price}
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={556}
          height={450}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};
