type ButtonProps = {
  text: string;
  onClick?: () => void;
};
export const WhiteButton = ({ text, onClick }: ButtonProps) => {
    return (
        <button className="bg-white rounded-sm text-black font-semibold w-[172px] h-[48px]" onClick={onClick}>{text}</button>
    )
}