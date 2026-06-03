const HeroBanner = ({ title, playerImage }) => {
  return (
    <section className="relative min-h-[500px] lg:h-[70vh] overflow-hidden bg-black">
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* TITLE DESIGN */}
      <img
        src="/banner-title.png"
        alt="banner"
        className="
          absolute
          left-4
          sm:left-8
          md:left-12
          lg:left-24
          top-1/2
          -translate-y-1/2
          z-20
          w-[220px]
          sm:w-[300px]
          md:w-[380px]
          lg:w-[500px]
        "
      />

      {/* TITLE */}
      <div
        className="
          absolute
          left-4
          sm:left-8
          md:left-12
          lg:left-24
          top-1/2
          -translate-y-1/2
          z-30
        "
      >
        <h1
          className="
            text-white
            uppercase
            font-black
            leading-none
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
        >
          {title}
        </h1>
      </div>

      {/* RIGHT IMAGE */}
      <img
        src={playerImage}
        alt={title}
        className="
          absolute
          right-0
          bottom-0
          z-30
          h-[55%]
          sm:h-[65%]
          md:h-[75%]
          lg:h-[90%]
          xl:h-[95%]
          object-contain
        "
      />
    </section>
  );
};

export default HeroBanner;
