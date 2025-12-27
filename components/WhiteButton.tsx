type ButtonProps = {
  text: string;
};
export const WhiteButton = ({ text }: ButtonProps) => {
    return (
        <button className="bg-white rounded-sm text-black font-semibold w-[172px] h-[48px]">{text}</button>
    )
}