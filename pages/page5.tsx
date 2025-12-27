import Image from "next/image";

export const Page5 = () => {
  return (
    <>
      <div className="mt-[125px] grid grid-cols-2 gap-[110px] flex items-center">
        <Image
          src="/waves.jpg"
          alt="waves"
          width={550}
          height={550}
          className="w-[550px] h-[550px] rounded-3xl"
        />
        <div>
          <h2
            className="
    text-[48px]
    font-semibold
    leading-[1.25]
    tracking-[1px]
    capitalize
  "
          >
            Join the community and get the best NFT collection
          </h2>
          <div className="mt-[62px]">
            <button
              className="bg-red-500 text-[20px] w-[224px] h-[59px] font-[600] rounded-xl bg-gradient-to-b from-fuchsia-500 to-purple-800
"
            >
              JOIN COMMUNITY
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
