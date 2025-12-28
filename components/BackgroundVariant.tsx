type BackgroundVariant = 'hero' | 'artwork' | 'trending' | 'artists';

interface BackgroundGradientProps {
  variant: BackgroundVariant;
}

export const BackgroundGradient = ({ variant }: BackgroundGradientProps) => {
  const gradients = {
    hero: (
      <>
        {/* Top right - bright purple */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-purple-600/40 rounded-full blur-[180px]" />
        {/* Bottom left - deep purple */}
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-800/30 rounded-full blur-[150px]" />
      </>
    ),
    artwork: (
      <>
        {/* Center-left - warm orange/pink */}
        <div className="absolute top-1/3 left-0 w-[900px] h-[900px] bg-pink-600/25 rounded-full blur-[160px]" />
        {/* Right side - purple */}
        <div className="absolute top-1/4 right-0 w-[1000px] h-[1000px] bg-purple-700/30 rounded-full blur-[170px]" />
      </>
    ),
    trending: (
      <>
        {/* Top - blue/purple mix */}
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-indigo-600/25 rounded-full blur-[150px]" />
        {/* Right - pink/purple */}
        <div className="absolute top-1/2 right-0 w-[900px] h-[900px] bg-fuchsia-600/25 rounded-full blur-[160px]" />
        {/* Bottom - deep purple */}
        <div className="absolute bottom-0 left-1/4 w-[1000px] h-[1000px] bg-purple-700/30 rounded-full blur-[170px]" />
      </>
    ),
    artists: (
      <>
        {/* Top center - spotlight purple */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] bg-purple-600/25 rounded-full blur-[180px]" />
        {/* Left - pink accent */}
        <div className="absolute top-1/3 left-0 w-[700px] h-[700px] bg-pink-600/20 rounded-full blur-[140px]" />
        {/* Right - fuchsia */}
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-fuchsia-600/25 rounded-full blur-[150px]" />
      </>
    ),
  };

  return (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f] overflow-hidden">
      {gradients[variant]}
    </div>
  );
};