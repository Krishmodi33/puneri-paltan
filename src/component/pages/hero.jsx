import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPlayers } from "../redux/action/player.action";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const dispatch = useDispatch();

  const { raiders, defenders, allrounders, isLoading } = useSelector(
    (state) => state.player,
  );

  // COMBINED ARRAY
  const players = [...raiders, ...defenders, ...allrounders];
  const [current, setCurrent] = useState(0);

  // FETCH PLAYERS
  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  // NEXT SLIDE
  const nextSlide = () => {
    if (players.length <= 3) return;
    setCurrent((prev) => (prev >= players.length - 3 ? 0 : prev + 1));
  };

  // PREVIOUS SLIDE
  const prevSlide = () => {
    if (players.length <= 3) return;
    setCurrent((prev) => (prev === 0 ? players.length - 3 : prev - 1));
  };

  // LOADING
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {/* HERO BANNER */}
<div className="w-full overflow-hidden">
  <img
    src="/home-banner-new-design-s12.webp"
    alt="hero"
    className="
      w-full
      h-auto
      sm:h-[650px]
      md:h-[800px]
      lg:h-screen
      object-contain
      lg:object-cover
      object-center
      block
    "
  />
</div>

      {/* MAIN SECTION */}
      <section className="relative bg-black overflow-hidden">
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/description-bg-new.jpg')" }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center pt-10 sm:pt-16 lg:pt-24 px-4 sm:px-8 pb-16 sm:pb-24">

          {/* SCROLL LABEL */}
          <div className="flex items-center gap-4 mb-8 sm:mb-12 text-white text-base sm:text-2xl lg:text-4xl tracking-[8px] sm:tracking-[14px] lg:tracking-[20px] uppercase">
            SCROLL
          </div>

          {/* DESCRIPTION */}
          <div className="max-w-5xl text-center mb-12 sm:mb-20">
            <h1 className="text-orange-500 font-black uppercase leading-tight tracking-wide text-sm sm:text-lg md:text-2xl lg:text-4xl">
              Puneri Paltan is currently one of the top performing teams in the
              Pro Kabaddi League. With a mix of unstoppable energy, honed-out
              skills and steely nerves, here's a force that consistently looks
              forward to perform better, challenge its opponents and make a
              difference.
            </h1>
          </div>

          {/* PLAYERS SECTION */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-0">

            {/* LEFT TITLE */}
            <div className="w-full lg:w-[20%] text-center lg:text-left shrink-0">
              <h1 className="text-orange-500 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase">
                Players
              </h1>
            </div>

            {/* PLAYER CARDS — show 1 on mobile, 2 on sm, 3 on lg+ */}
            <div className="w-full lg:w-[75%] xl:w-[80%] flex items-end justify-center gap-4 sm:gap-6 lg:gap-8 overflow-hidden">

              {/* Mobile: show only 1 card */}
              <div className="flex sm:hidden items-end justify-center w-full">
                {players[current] && (
                  <PlayerCard player={players[current]} index={0} />
                )}
              </div>

              {/* sm: show 2 cards */}
              <div className="hidden sm:flex lg:hidden items-end justify-center w-full gap-6">
                {players.slice(current, current + 2).map((player, index) => (
                  <PlayerCard key={player.id} player={player} index={index} />
                ))}
              </div>

              {/* lg+: show 3 cards */}
              <div className="hidden lg:flex items-end justify-center w-full gap-8">
                {players.slice(current, current + 3).map((player, index) => (
                  <PlayerCard key={player.id} player={player} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* PREV / NEXT BUTTONS */}
          <div className="w-full flex justify-center lg:justify-end gap-4 mt-10 lg:pr-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/90 hover:bg-orange-500 transition-colors flex items-center justify-center"
              aria-label="Previous player"
            >
              <ChevronLeft className="text-black w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/90 hover:bg-orange-500 transition-colors flex items-center justify-center"
              aria-label="Next player"
            >
              <ChevronRight className="text-black w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* BUY TICKETS FLOATING CARD + WHITE SECTION */}
      <section className="relative bg-[#f5f5f5] pb-12 sm:pb-16 lg:pb-20">
        {/* FLOATING CARD */}
        <div className="relative w-full flex justify-center -translate-y-0">
          <div className="relative w-[95vw] max-w-[1400px] h-[180px] sm:h-[260px] lg:h-[340px]">
            {/* LEFT SHAPE */}
            <div
              className="absolute left-0 top-0 h-full w-[55%] bg-[#2d2623]"
              style={{ clipPath: "polygon(10% 0%, 100% 0%, 85% 100%, 0% 100%)" }}
            />
            {/* RIGHT SHAPE */}
            <div
              className="absolute right-0 top-0 h-full w-[55%] bg-black"
              style={{ clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            />

            {/* PLAYER IMAGE */}
            <img
              src="/buy-tickets-homepage_s12.png"
              alt="player"
              className="absolute left-2 sm:left-8 lg:left-16 bottom-0 z-20 h-[120px] sm:h-[220px] lg:h-[430px] object-contain"
            />

            {/* BUY TICKETS BUTTON */}
<a
  href="https://www.district.in/events/pkl-2025-chennai-team"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#f03a00] to-[#ff9f43] px-4 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 text-white italic uppercase font-bold text-[10px] sm:text-sm lg:text-base tracking-[1px] sm:tracking-[3px] lg:tracking-[5px] skew-x-[-20deg] whitespace-nowrap hover:scale-105 transition duration-300"
>
  <span className="block skew-x-[20deg]">
    Buy Tickets ›
  </span>
</a>

            {/* TICKET IMAGE */}
            <img
              src="/tickets.png"
              alt="ticket"
              className="absolute right-2 sm:right-6 lg:right-10 top-1/2 z-20 -translate-y-1/2 rotate-[-12deg] w-[80px] sm:w-[160px] md:w-[240px] lg:w-[380px] object-contain"
            />
          </div>
        </div>

        {/* Spacer below floating card so nothing hides behind it */}
        <div className="h-8 sm:h-12 lg:h-20" />
      </section>

      {/* PALTAN WORLD SECTION */}
      <section>
<div className="relative overflow-hidden">
  <img
    src="/paltan-world-homepage_s12.png"
    alt="Paltan World"
    className="
      w-full

      h-[400px]
      sm:h-[500px]
      md:h-[650px]
      lg:h-auto

      object-cover
      lg:object-cover

      object-center
      block
    "
  />

          <div className="absolute inset-0 z-20">
            {/* TITLE */}
            <div className="absolute right-4 sm:right-10 md:right-16 lg:right-28 top-[32%] -translate-y-1/2 leading-none text-left uppercase">
              <h1 className="text-[30px] sm:text-[54px] md:text-[80px] lg:text-[120px] font-black text-orange-500 tracking-tight">
                PALTAN
              </h1>
              <h1 className="text-[26px] sm:text-[46px] md:text-[70px] lg:text-[110px] font-black text-white tracking-tight -mt-1 sm:-mt-2 lg:-mt-4">
                WORLD
              </h1>
            </div>

            {/* ENTER BUTTON */}
            <button className="absolute right-4 sm:right-10 md:right-16 lg:right-48 top-[62%] sm:top-[60%] lg:top-[58%] bg-gradient-to-r from-[#f03a00] to-[#ff9f43] px-5 sm:px-8 lg:px-20 py-2 sm:py-3 lg:py-4 text-white italic uppercase font-bold text-xs sm:text-sm lg:text-base tracking-[2px] sm:tracking-[4px] skew-x-[-20deg] transition duration-300 hover:scale-105">
              <span className="block skew-x-[20deg]">Enter</span>
            </button>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="relative overflow-hidden bg-black py-10 sm:py-16 lg:py-24">
        {/* ORANGE SHAPE */}
        <div
          className="absolute left-0 top-0 h-[50%] sm:h-[60%] w-[85%] lg:w-[70%] bg-[#ff7300]"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 80%)" }}
        />
        {/* BLACK SHAPE */}
        <div
          className="absolute right-0 bottom-0 h-[15%] sm:h-[18%] w-[80%] lg:w-[70%] bg-black"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
        />

        {/* MAIN CARD */}
        <div className="relative z-20 flex justify-center px-4">
          <div className="relative w-full sm:w-[90%] lg:w-[75%] overflow-hidden">
            <img
              src="/news-banner.jpg"
              alt="news"
              className="w-full h-[240px] sm:h-[400px] md:h-[520px] lg:h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center uppercase px-4">
              <h1 className="text-[28px] sm:text-[48px] md:text-[68px] lg:text-[95px] font-black leading-none tracking-tight text-[#ff7300]">
                Puneri Paltan
              </h1>
              <h1 className="-mt-1 sm:-mt-2 text-[26px] sm:text-[44px] md:text-[68px] lg:text-[95px] font-black leading-none tracking-tight text-white">
                In The News
              </h1>
              <button className="mt-5 sm:mt-8 lg:mt-12 bg-gradient-to-r from-[#f03a00] to-[#ff9f43] px-6 sm:px-12 lg:px-24 py-2 sm:py-3 lg:py-4 text-white italic uppercase font-bold text-xs sm:text-sm lg:text-base tracking-[2px] sm:tracking-[4px] skew-x-[-20deg] transition duration-300 hover:scale-105">
                <span className="block skew-x-[20deg]">Enter</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT ACCENT LINE */}
        <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 h-16 sm:h-24 lg:h-40 w-[3px] lg:w-[4px] bg-[#ff7300]" />
      </section>

      {/* PARTNERS SECTION */}
      <section className="relative bg-[#f3f3f3] pb-12 sm:pb-16 lg:pb-20">
        {/* NEWSLETTER BAR */}
        <div className="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[1200px]">
          <div
            className="bg-[#ff7300] px-4 sm:px-8 lg:px-16 py-4 sm:py-6 lg:py-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 lg:gap-10 shadow-xl"
            style={{ clipPath: "polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%)" }}
          >
            <h2 className="text-white font-bold uppercase text-center sm:text-left text-base sm:text-xl lg:text-3xl whitespace-nowrap">
              Subscribe To Our Newsletter
            </h2>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email-id"
                className="flex-1 sm:w-[260px] lg:w-[350px] px-4 sm:px-6 py-3 outline-none bg-white text-gray-700 text-sm sm:text-base"
              />
              <Link
  to="/paltan-world"
  className="bg-gradient-to-r from-[#f03a00] to-[#ff9f43] px-5 sm:px-8 py-3 text-white font-bold italic text-sm sm:text-base inline-flex items-center"
>
  Go
</Link>
            </div>
          </div>
        </div>

        {/* SPACER for newsletter bar overlap */}
        <div className="h-[80px] sm:h-[90px] lg:h-[100px]" />

        {/* PARTNERS TITLE */}
        <div className="pt-8 sm:pt-12 text-center">
          <h1 className="text-[42px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-black uppercase text-[#ff7300] leading-none">
            Partners
          </h1>

          <div className="mt-10 sm:mt-14 lg:mt-20 flex flex-col items-center gap-10 sm:gap-12 lg:gap-16">
            {/* Principal Partner */}
            <div className="text-center">
              <img src="/force_motors.png" alt="Force Motors" className="h-14 sm:h-20 lg:h-28 object-contain mx-auto" />
              <p className="mt-3 text-gray-700 text-sm sm:text-lg tracking-[2px]">Principal Partner</p>
            </div>

            {/* Associate Partners */}
            <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 lg:gap-28">
              <div className="text-center">
                <img src="/stihl-logo.png" alt="Stihl" className="h-10 sm:h-14 lg:h-16 object-contain mx-auto" />
                <p className="mt-3 text-gray-700 text-sm sm:text-lg leading-tight tracking-[2px]">Associate-<br />Partner</p>
              </div>
              <div className="text-center">
                <img src="/navitas_sponsor.webp" alt="Navitas Solar" className="h-10 sm:h-14 lg:h-16 object-contain mx-auto" />
                <p className="mt-3 text-gray-700 text-sm sm:text-lg leading-tight tracking-[2px]">Associate-<br />Partner</p>
              </div>
            </div>

            {/* Co Partner */}
            <div className="text-center">
              <img src="/paras.webp" alt="Paras Buildtech" className="h-12 sm:h-16 lg:h-20 object-contain mx-auto" />
              <p className="mt-3 text-gray-700 text-sm sm:text-lg tracking-[2px]">Co-Partner</p>
            </div>

            {/* Wellness Partner */}
            <div className="text-center">
              <img src="/better.webp" alt="BetterAlt" className="h-8 sm:h-12 lg:h-14 object-contain mx-auto" />
              <p className="mt-3 text-gray-700 text-sm sm:text-lg tracking-[2px]">Wellness Partner</p>
            </div>

            {/* Kit Partner */}
            <div className="text-center">
              <img src="/shivnaresh-logo.webp" alt="Shiv Naresh" className="h-12 sm:h-16 lg:h-20 object-contain mx-auto" />
              <p className="mt-3 text-gray-700 text-sm sm:text-lg tracking-[2px]">Kit Partner</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Extracted PlayerCard sub-component for cleaner rendering
const PlayerCard = ({ player, index }) => {
  const isFeatured = index === 0;

  return (
    <div
      className={`relative flex flex-col items-center transition-all duration-500 ${
        isFeatured ? "scale-100 opacity-100" : "scale-75 opacity-40"
      }`}
    >
      {/* GLOW */}
      <div
        className={`absolute rounded-full bg-orange-500/20 blur-3xl ${
          isFeatured
            ? "w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
            : "w-[150px] h-[150px] sm:w-[220px] sm:h-[220px]"
        }`}
      />

      {/* PLAYER IMAGE */}
      <img
        src={player.profile_image}
        alt={player.name}
        className={`relative z-10 object-contain ${
          isFeatured
            ? "w-[160px] sm:w-[200px] lg:w-[260px]"
            : "w-[120px] sm:w-[160px] lg:w-[220px]"
        }`}
      />

      {/* PLAYER INFO */}
      <div className="relative z-10 text-center -mt-4 sm:-mt-6">
        <h2
          className={`text-white uppercase tracking-wide ${
            isFeatured
              ? "text-xl sm:text-3xl lg:text-5xl font-light"
              : "text-base sm:text-xl"
          }`}
        >
          {player.name}
        </h2>

        {isFeatured && (
          <>
            <p className="text-orange-500 text-sm sm:text-base lg:text-xl mt-1 uppercase tracking-[2px] sm:tracking-[3px]">
              {player.position}
            </p>
            <Link
  to="/players"
  className="mt-5 sm:mt-7 bg-gradient-to-r from-orange-700 to-orange-400 px-6 sm:px-10 lg:px-14 py-2 sm:py-3 text-white uppercase italic font-bold text-xs sm:text-sm tracking-[2px] sm:tracking-[4px] skew-x-[-20deg] hover:scale-105 transition duration-300 inline-block"
>
  <span className="block skew-x-[20deg]">
    Enter
  </span>
</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;