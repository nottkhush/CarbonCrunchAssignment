export const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative bg-[#0a0a0f]">
      {/* Purple glow top right */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/30 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Purple glow bottom left */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};