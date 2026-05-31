import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPlayers } from "../redux/action/player.action";

import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {

  const dispatch = useDispatch();

  const {
    raiders,
    defenders,
    allrounders,
    isLoading,
  } = useSelector((state) => state.player);

  // COMBINED ARRAY
  const players = [
    ...raiders,
    ...defenders,
    ...allrounders,
  ];

  const [current, setCurrent] = useState(0);

  // FETCH PLAYERS
  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  // NEXT SLIDE
  const nextSlide = () => {

    if (players.length <= 3) return;

    setCurrent((prev) =>
      prev >= players.length - 3 ? 0 : prev + 1
    );
  };

  // PREVIOUS SLIDE
  const prevSlide = () => {

    if (players.length <= 3) return;

    setCurrent((prev) =>
      prev === 0 ? players.length - 3 : prev - 1
    );
  };

  // LOADING
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">

        <h1 className="text-white text-5xl font-bold">
          Loading...
        </h1>

      </div>
    );
  }

  return (
    <>

      {/* HERO BANNER */}
      <div className="w-full h-screen">

        <img
          src="/home-banner-new-design-s12.webp"
          alt="hero"
          className="w-full h-full object-cover"
        />

      </div>

      {/* MAIN SECTION */}
      <section className="relative min-h-[170vh] bg-black">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/description-bg-new.jpg')",
          }}
        ></div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center pt-20 px-6">

          {/* SCROLL */}
          <div className="flex items-center gap-15 mb-16 text-white tracking-[20px] uppercase text-[50px]">
            SCROLL
          </div>

          {/* DESCRIPTION */}
          <div className="max-w-7xl flex justify-center text-center mb-24">

            <h1 className="text-orange-500 font-black uppercase leading-tight tracking-wide text-[16px] sm:text-3xl md:text-4xl lg:text-5xl">

              Puneri Paltan is currently one of the top performing teams in the
              Pro Kabaddi League. With a mix of unstoppable energy, honed-out
              skills and steely nerves, here's a force that consistently looks
              forward to perform better, challenge its opponents and make a
              difference.

            </h1>

          </div>

          {/* PLAYERS SECTION */}
          <div className="w-full flex items-center justify-between">

            {/* LEFT TITLE */}
            <div className="hidden lg:block w-[20%]">

              <h1 className="text-orange-500 text-7xl xl:text-8xl font-black uppercase">
                Players
              </h1>

            </div>

            {/* PLAYER CARDS */}
            <div className="w-full lg:w-[80%] flex items-center justify-center gap-8">

              {players
                ?.slice(current, current + 3)
                .map((player, index) => (

                  <div
                    key={player.id}
                    className={`relative flex flex-col items-center transition-all duration-500 ${
                      index === 0
                        ? "scale-100 opacity-100"
                        : "scale-75 opacity-40"
                    }`}
                  >

                    {/* GLOW */}
                    <div
                      className={`absolute rounded-full bg-orange-500/20 blur-3xl ${
                        index === 0
                          ? "w-[320px] h-[320px]"
                          : "w-[240px] h-[240px]"
                      }`}
                    ></div>

                    {/* PLAYER IMAGE */}
                    <img
                      src={player.profile_image}
                      alt={player.name}
                      className={`relative z-10 object-contain ${
                        index === 0
                          ? "w-[180px] lg:w-[250px]"
                          : "w-[220px] lg:w-[280px]"
                      }`}
                    />

                    {/* PLAYER INFO */}
                    <div className="relative z-10 text-center -mt-8">

                      {/* NAME */}
                      <h2
                        className={`text-white uppercase tracking-wide ${
                          index === 0
                            ? "text-5xl lg:text-6xl font-light"
                            : "text-2xl"
                        }`}
                      >
                        {player.name}
                      </h2>

                      {/* POSITION */}
                      {index === 0 && (
                        <>

                          <p className="text-orange-500 text-2xl mt-2 uppercase tracking-[3px]">
                            {player.position}
                          </p>

                          {/* BUTTON */}
                          <button className="mt-8 bg-gradient-to-r from-orange-700 to-orange-400 px-16 py-4 text-white uppercase tracking-[5px] italic font-bold skew-x-[-20deg] hover:scale-105 transition duration-300">

                            <span className="block skew-x-[20deg]">
                              Enter
                            </span>

                          </button>

                        </>
                      )}

                    </div>

                  </div>

                ))}

            </div>

          </div>

          {/* BUTTONS */}
          <div className="w-full flex justify-end gap-4 mt-16 pr-10">

            {/* PREV */}
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white/90 hover:bg-orange-500 transition flex items-center justify-center"
            >
              <ChevronLeft className="text-black" />
            </button>

            {/* NEXT */}
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white/90 hover:bg-orange-500 transition flex items-center justify-center"
            >
              <ChevronRight className="text-black" />
            </button>

          </div>

        </div>
        

      </section>

{/* WHITE SECTION */}
<section className="relative bg-[#f5f5f5] pt-72 pb-12">

  {/* FLOATING CARD */}
<div className="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-[45%]">

    <div className="relative w-[1400px] h-[340px] bg-transparent">

      {/* LEFT SHAPE */}
      <div
        className="absolute left-0 top-0 h-full w-[55%] bg-[#2d2623]"
        style={{
          clipPath:
            "polygon(10% 0%, 100% 0%, 85% 100%, 0% 100%)",
        }}
      />

      {/* RIGHT SHAPE */}
      <div
        className="absolute right-0 top-0 h-full w-[55%] bg-black"
        style={{
          clipPath:
            "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* PLAYER */}
      <img
        src="/buy-tickets-homepage_s12.png"
        alt="player"
        className="absolute left-16 bottom-0 z-20 h-[430px]"
      />

      {/* BUTTON */}
      <button className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#f03a00] to-[#ff9f43] px-10 py-4 text-white italic uppercase tracking-[5px] font-bold skew-x-[-20deg]">

        <span className="block skew-x-[20deg]">
          Buy Tickets ›
        </span>

      </button>

      {/* TICKET IMAGE */}
      <img
        src="/tickets.png"
        alt="ticket"
        className="absolute right-10 top-1/2 z-20 w-[420px] -translate-y-1/2 rotate-[-12deg]"
      />

    </div>

  </div>

</section>
<section>
<div className="relative  overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <img
    src="/paltan-world-homepage_s12.png"
    alt="hero"
    className=" w-full object-cover block"
  />

  {/* OVERLAY CONTENT */}
  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">

    {/* TITLE */}
    <div className="absolute right-20 lg:right-32 top-1/3 -translate-y-1/2 leading-none text-left uppercase">

      {/* TOP */}
      <h1 className="text-[80px] lg:text-[120px] font-black text-orange-500 tracking-[-8px]">
        PALTAN
      </h1>

      {/* BOTTOM */}
      <h1 className=" absolute right-20 lg:-right-16 -mt-6 text-[70px] lg:text-[110px] font-black text-white tracking-[-8px]">
        WORLD
      </h1>

    </div>

    {/* BUTTON */}
    <button className="mt-10 bg-gradient-to-r from-[#f03a00] to-[#ff9f43] px-28 py-4 text-white italic uppercase tracking-[5px] font-bold skew-x-[-20deg] transition duration-300 hover:scale-105 absolute right-50 lg:right-58 top-1/2 -translate-y-1/2">

      <span className="block skew-x-[20deg]">
        Enter
      </span>

    </button>

  </div>

</div>
</section>

{/* NEWS SECTION */}
<section className="relative min-h-screen overflow-hidden bg-black py-24">

  {/* ORANGE SHAPE */}
  <div
    className="absolute left-0 top-0 h-[65%] w-[70%] bg-[#ff7300]"
    style={{
      clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 80%)",
    }}
  ></div>

  {/* BLACK SHAPE */}
  <div
    className="absolute right-0 bottom-0 h-[20%] w-[70%] bg-black"
    style={{
      clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
    }}
  ></div>

  {/* MAIN CARD */}
  <div className="relative z-20 flex justify-center">
    <div className="relative w-[75%] overflow-hidden">
      {/* IMAGE */}
      <img
        src="/news-banner.jpg"
        alt="news"
        className="object-cover"
      />
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45"></div>
      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center uppercase">
        {/* TOP TITLE */}
        <h1 className="text-[70px] lg:text-[95px] font-black leading-none tracking-[-4px] text-[#ff7300]">
          Puneri Paltan
        </h1>
        {/* BOTTOM TITLE */}
        <h1 className="-mt-2 text-[70px] lg:text-[95px] font-black leading-none tracking-[-4px] text-white">
          In The News
        </h1>
        {/* BUTTON */}
        <button className="mt-12 bg-gradient-to-r from-[#f03a00] to-[#ff9f43] px-24 py-4 text-white italic uppercase tracking-[5px] font-bold skew-x-[-20deg] transition duration-300 hover:scale-105">
          <span className="block skew-x-[20deg]">
            Enter
          </span>
        </button>
      </div>
    </div>
  </div>

  {/* RIGHT LINE */}
  <div className="absolute right-6 top-1/2 h-40 w-[4px] -translate-y-1/2 bg-[#ff7300]"></div>

</section>

{/* PARTNERS SECTION */}
<section className="relative bg-[#f3f3f3] pt-40 pb-20">

  {/* NEWSLETTER BAR */}
  <div className="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-1/2">

    <div
      className=" w-[1200px] bg-[#ff7300] px-16 py-8 flex items-center gap-10 shadow-xl"
      style={{
        clipPath: "polygon(3% 0%, 100% 0%, 98% 100%, 0% 100%)",
      }}
    >
      <h2 className="text-white font-bold text-3xl uppercase">
        Subscribe To Our Newsletter
      </h2>

      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email-id"
          className="px-6 py-3 w-[350px] outline-none bg-white text-gray-700"
        />

        <button className="bg-gradient-to-r from-[#f03a00] to-[#ff9f43] px-8 text-white font-bold italic">
          Go
        </button>
      </div>
    </div>

  </div>

  {/* PARTNERS TITLE */}
  <div className="pt-24 text-center">

    <h1 className="text-[120px] font-black uppercase text-[#ff7300]">
      Partners
    </h1>
<div className="mt-20 flex flex-col items-center">

  {/* Principal Partner */}
  <div className="text-center">
    <img
      src="/force_motors.png"
      alt="Force Motors"
      className="h-28 object-contain mx-auto"
    />
    <p className="mt-4 text-gray-700 text-xl tracking-[3px]">
      Principal Partner
    </p>
  </div>

  {/* Associate Partners */}
  <div className="mt-16 flex flex-wrap justify-center gap-28">

    <div className="text-center">
      <img
        src="/stihl-logo.png"
        alt="Stihl"
        className="h-16 object-contain mx-auto"
      />
      <p className="mt-5 text-gray-700 text-xl leading-tight tracking-[3px]">
        Associate-
        <br />
        Partner
      </p>
    </div>

    <div className="text-center">
      <img
        src="/navitas_sponsor.webp"
        alt="Navitas Solar"
        className="h-16 object-contain mx-auto"
      />
      <p className="mt-5 text-gray-700 text-xl leading-tight tracking-[3px]">
        Associate-
        <br />
        Partner
      </p>
    </div>

  </div>

  {/* Co Partner */}
  <div className="mt-20 text-center">
    <img
      src="/paras.webp"
      alt="Paras Buildtech"
      className="h-20 object-contain mx-auto"
    />
    <p className="mt-5 text-gray-700 text-xl tracking-[3px]">
      Co-Partner
    </p>
  </div>

  {/* Wellness Partner */}
  <div className="mt-20 text-center">
    <img
      src="/better.webp"
      alt="BetterAlt"
      className="h-14 object-contain mx-auto"
    />
    <p className="mt-5 text-gray-700 text-xl tracking-[3px]">
      Wellness Partner
    </p>
  </div>

  {/* Kit Partner */}
  <div className="mt-20 text-center">
    <img
      src="/shivnaresh-logo.webp"
      alt="Shiv Naresh"
      className="h-20 object-contain mx-auto"
    />
    <p className="mt-5 text-gray-700 text-xl tracking-[3px]">
      Kit Partner
    </p>
  </div>

</div>
  </div>

</section>

    </>
  );
};

export default Hero;