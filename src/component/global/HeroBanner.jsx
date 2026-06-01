const HeroBanner = ({
  title,
  bannerImage,
  playerImage,
}) => {
  return (
    <section className="relative h-[70vh] overflow-hidden bg-black">

      {/* BACKGROUND IMAGE */}
      <img
        src={bannerImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* TITLE DESIGN */}
      <img
        src="/banner-title.png"
        alt="banner"
        className="absolute left-84 top-1/2 -translate-y-1/2 z-20 w-[500px]"
      />

      {/* TITLE */}
      <div className="absolute left-82 top-1/2 -translate-y-1/2 z-30">
        <h1 className="text-white text-7xl md:text-8xl font-black uppercase tracking-wide">
          {title}
        </h1>
      </div>

      {/* RIGHT IMAGE */}
      <img
        src={playerImage}
        alt={title}
        className="absolute right-10 bottom-0 z-30 h-[95%] object-contain"
      />

    </section>
  );
};

export default HeroBanner;