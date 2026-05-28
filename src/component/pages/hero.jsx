import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPlayers } from "../redux/action/player.action";

import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {

  const dispatch = useDispatch();

  const { players, isLoading } = useSelector(
    (state) => state.player
  );

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  // Next Slide
  const nextSlide = () => {

    if (players.length <= 3) return;

    setCurrent((prev) =>
      prev >= players.length - 3 ? 0 : prev + 1
    );
  };

  // Previous Slide
  const prevSlide = () => {

    if (players.length <= 3) return;

    setCurrent((prev) =>
      prev === 0 ? players.length - 3 : prev - 1
    );
  };

  // Loading
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

      {/* Banner */}
      <div className="w-full h-screen">
        <img
          src="/home-banner-new-design-s12.webp"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/description-bg-new.jpg')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center pt-20 px-6">

          {/* Scroll */}
          <div className="flex items-center gap-15 mb-16 text-white tracking-[20px] uppercase text-[50px]">
            SCROLL
          </div>

          {/* Description */}
          <div className="max-w-7xl flex justify-center text-center mb-24">

            <h1 className="text-orange-500 font-black uppercase leading-tight tracking-wide text-[16px] sm:text-3xl md:text-4xl lg:text-5xl">
              Puneri Paltan is currently one of the top performing teams in the
              Pro Kabaddi League. With a mix of unstoppable energy, honed-out
              skills and steely nerves, here's a force that consistently looks
              forward to perform better, challenge its opponents and make a
              difference.
            </h1>

          </div>

          {/* Players Section */}
          <div className="w-full flex items-center justify-between">

            {/* Left Title */}
            <div className="hidden lg:block w-[20%]">

              <h1 className="text-orange-500 text-7xl xl:text-8xl font-black uppercase">
                Players
              </h1>

            </div>

            {/* Cards */}
            <div className="w-full lg:w-[80%] flex items-center justify-center gap-8">

              {players?.slice(current, current + 3).map((player, index) => (

                <div
                  key={player.id}
                  className={`relative flex flex-col items-center transition-all duration-500 ${
                    index === 0
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-40"
                  }`}
                >

                  {/* Glow */}
                  <div
                    className={`absolute rounded-full bg-orange-500/20 blur-3xl ${
                      index === 0
                        ? "w-[320px] h-[320px]"
                        : "w-[240px] h-[240px]"
                    }`}
                  ></div>

                  {/* Player Image */}
                  <img
                    src={player.player_image}
                    alt={player.player_name}
                    className={`relative z-10 object-contain ${
                      index === 0
                        ? "w-[380px] lg:w-[450px]"
                        : "w-[220px] lg:w-[280px]"
                    }`}
                  />

                  {/* Player Info */}
                  <div className="relative z-10 text-center -mt-8">

                    {/* Name */}
                    <h2
                      className={`text-white uppercase tracking-wide ${
                        index === 0
                          ? "text-5xl lg:text-6xl font-light"
                          : "text-2xl"
                      }`}
                    >
                      {player.player_name}
                    </h2>

                    {/* Position */}
                    {index === 0 && (
                      <>

                        <p className="text-orange-500 text-2xl mt-2 uppercase tracking-[3px]">
                          {player.player_position}
                        </p>

                        {/* Button */}
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

          {/* Buttons */}
          <div className="w-full flex justify-end gap-4 mt-16 pr-10">

            {/* Prev */}
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white/90 hover:bg-orange-500 transition flex items-center justify-center"
            >
              <ChevronLeft className="text-black" />
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white/90 hover:bg-orange-500 transition flex items-center justify-center"
            >
              <ChevronRight className="text-black" />
            </button>

          </div>

        </div>

      </section>

    </>
  );
};

export default Hero;