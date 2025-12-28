export const SkewedButton = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-b from-fuchsia-500 to-purple-800 text-white h-[60px] px-12 text-[20px] font-[600] hover:scale-105 transition-transform"
      style={{
        clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
        borderRadius: '0.75rem'
      }}
    >  
      <div className="pr-5">
        {text}
      </div>
    </button>
  );
};