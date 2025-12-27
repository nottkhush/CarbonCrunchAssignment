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
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[28px] font-medium">{name}</p>
          <p className="text-[12px]">{collection}</p>
        </div>

        <span className={`${poppins.className} text-[16px] text-[#DD24E1]`}>{price}</span>
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
