import { SkewedButton } from "@/components/SkewedButton";
import Image from "next/image";

const Page5 = () => {
  return (
    <div
      className="
        mt-20 sm:mt-28 lg:mt-[125px]
        grid grid-cols-1 lg:grid-cols-2 lg:gap-[110px]
        items-center
      "
    >
      {/* Image */}
      <div className="flex justify-center lg:block">
        <Image
          src="/waves.jpg"
          alt="waves"
          width={550}
          height={550}
          className="
            rounded-3xl
            w-[280px] h-[280px]
            sm:w-[380px] sm:h-[380px]
            lg:w-[6000px] lg:h-[550px]
          "
        />
      </div>

      {/* Content */}
      <div className="text-center lg:text-left">
        <h2
          className="
            text-[28px] sm:text-[36px] lg:text-[48px]
            font-semibold
            leading-[1.25]
            tracking-[1px]
            capitalize
          "
        >
          Join the community and get the best NFT collection
        </h2>

        <div className="mt-8 lg:mt-[62px] flex justify-center lg:justify-start">
          <SkewedButton text="JOIN COMMUNITY" />
        </div>
      </div>
    </div>
  );
};

export default Page5;