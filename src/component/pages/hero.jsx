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
      <div className="w-full h-[60vh] sm:h-[80vh] lg:h-screen">

        <img
          src="/home-banner-new-design-s12.webp"
          alt="hero"
          className="w-full h-full object-cover"
        />

      </div>

      {/* MAIN SECTION */}
      <section className="relative min-h-screen lg:min-h-[170vh] bg-black">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/description-bg-new.jpg')",
    }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/50" />

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col items-center pt-12 sm:pt-20 px-4 sm:px-6">

    {/* SCROLL */}
    <div
      className="
        flex
        items-center

        gap-4
        sm:gap-8
        lg:gap-15

        mb-10
        sm:mb-16

        text-white

        text-xl
        sm:text-3xl
        lg:text-[50px]

        tracking-[6px]
        sm:tracking-[12px]
        lg:tracking-[20px]

        uppercase
      "
    >
      SCROLL
    </div>

    {/* DESCRIPTION */}
    <div className="max-w-7xl flex justify-center text-center mb-16 sm:mb-24">

      <h1
        className="
          text-orange-500
          font-black
          uppercase
          leading-tight
          tracking-wide

          text-sm
          sm:text-xl
          md:text-3xl
          lg:text-5xl
        "
      >
        Puneri Paltan is currently one of the top performing teams in the
        Pro Kabaddi League. With a mix of unstoppable energy, honed-out
        skills and steely nerves, here's a force that consistently looks
        forward to perform better, challenge its opponents and make a
        difference.
      </h1>

    </div>

    {/* PLAYERS SECTION */}
    <div className="flex flex-col lg:flex-row items-center w-full">

      {/* LEFT TITLE */}
      <div className="w-full lg:w-[20%] text-center lg:text-left mb-10 lg:mb-0">

        <h1
          className="
            text-orange-500

            text-4xl
            sm:text-5xl
            lg:text-7xl
            xl:text-8xl

            font-black
            uppercase
          "
        >
          Players
        </h1>

      </div>

      {/* PLAYER CARDS */}
      <div
        className="
          w-full
          lg:w-[80%]

          flex
          flex-col
          sm:flex-row

          items-center
          justify-center

          gap-4
          sm:gap-6
          lg:gap-8
        "
      >

        {players?.slice(current, current + 3).map((player, index) => (

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
                  ? "w-[220px] h-[220px] sm:w-[320px] sm:h-[320px]"
                  : "w-[180px] h-[180px] sm:w-[240px] sm:h-[240px]"
              }`}
            />

            {/* PLAYER IMAGE */}
            <img
              src={player.profile_image}
              alt={player.name}
              className={`relative z-10 object-contain ${
                index === 0
                  ? "w-[140px] sm:w-[180px] lg:w-[250px]"
                  : "w-[120px] sm:w-[180px] lg:w-[280px]"
              }`}
            />

            {/* PLAYER INFO */}
            <div className="relative z-10 text-center -mt-4 sm:-mt-8">

              {/* NAME */}
              <h2
                className={`text-white uppercase tracking-wide ${
                  index === 0
                    ? "text-2xl sm:text-4xl lg:text-6xl font-light"
                    : "text-lg sm:text-2xl"
                }`}
              >
                {player.name}
              </h2>

              {/* POSITION */}
              {index === 0 && (
                <>
                  <p
                    className="
                      text-orange-500

                      text-sm
                      sm:text-lg
                      lg:text-2xl

                      mt-2
                      uppercase

                      tracking-[2px]
                      sm:tracking-[3px]
                    "
                  >
                    {player.position}
                  </p>

                  {/* BUTTON */}
                  <button
                    className="
                      mt-6
                      sm:mt-8

                      bg-gradient-to-r
                      from-orange-700
                      to-orange-400

                      px-6
                      sm:px-10
                      lg:px-16

                      py-2
                      sm:py-3
                      lg:py-4

                      text-white
                      uppercase
                      italic
                      font-bold

                      text-xs
                      sm:text-sm
                      lg:text-base

                      tracking-[2px]
                      sm:tracking-[3px]
                      lg:tracking-[5px]

                      skew-x-[-20deg]

                      hover:scale-105
                      transition
                      duration-300
                    "
                  >
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
    <div
      className="
        w-full
        flex

        justify-center
        lg:justify-end

        gap-4

        mt-10
        lg:mt-16

        pr-0
        lg:pr-10
      "
    >

      <button
        onClick={prevSlide}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-orange-500 transition flex items-center justify-center"
      >
        <ChevronLeft className="text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 hover:bg-orange-500 transition flex items-center justify-center"
      >
        <ChevronRight className="text-black" />
      </button>

    </div>

  </div>

      </section>

{/* WHITE SECTION */}
<section className="relative bg-[#f5f5f5] pt-32 sm:pt-40 lg:pt-72 pb-12">

  {/* FLOATING CARD */}
  <div className="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-[35%] lg:-translate-y-[45%]">

    <div
      className="
        relative

        w-[95vw]
        max-w-[1400px]

        min-h-[220px]
        sm:min-h-[280px]
        lg:h-[340px]
      "
    >

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
        className="
          absolute
          left-2
          sm:left-8
          lg:left-16
          bottom-0
          z-20

          h-[140px]
          sm:h-[220px]
          md:h-[300px]
          lg:h-[430px]

          object-contain
        "
      />

      {/* BUTTON */}
      <button
        className="
          absolute
          left-1/2
          top-1/2
          z-30

          -translate-x-1/2
          -translate-y-1/2

          bg-gradient-to-r
          from-[#f03a00]
          to-[#ff9f43]

          px-4
          sm:px-8
          lg:px-10

          py-2
          sm:py-3
          lg:py-4

          text-white
          italic
          uppercase
          font-bold

          text-[10px]
          sm:text-sm
          lg:text-base

          tracking-[1px]
          sm:tracking-[3px]
          lg:tracking-[5px]

          skew-x-[-20deg]

          whitespace-nowrap
        "
      >
        <span className="block skew-x-[20deg]">
          Buy Tickets ›
        </span>
      </button>

      {/* TICKET IMAGE */}
      <img
        src="/tickets.png"
        alt="ticket"
        className="
          absolute
          right-2
          sm:right-6
          lg:right-10

          top-1/2
          z-20

          -translate-y-1/2
          rotate-[-12deg]

          w-[100px]
          sm:w-[180px]
          md:w-[260px]
          lg:w-[420px]
        "
      />

    </div>

  </div>

</section>

<section>
  <div className="relative overflow-hidden">

    {/* BACKGROUND IMAGE */}
    <img
      src="/paltan-world-homepage_s12.png"
      alt="hero"
      className="
        w-full
        h-[350px]
        sm:h-[500px]
        md:h-[650px]
        lg:h-auto
        object-cover
        block
      "
    />

    {/* OVERLAY CONTENT */}
    <div className="absolute inset-0 z-20">

      {/* TITLE */}
      <div
        className="
          absolute

          right-4
          sm:right-10
          md:right-16
          lg:right-32

          top-[35%]
          -translate-y-1/2

          leading-none
          text-left
          uppercase
        "
      >

        {/* PALTAN */}
        <h1
          className="
            text-[36px]
            sm:text-[60px]
            md:text-[80px]
            lg:text-[120px]

            font-black
            text-orange-500

            tracking-[-2px]
            sm:tracking-[-4px]
            lg:tracking-[-8px]
          "
        >
          PALTAN
        </h1>

        {/* WORLD */}
        <h1
          className="
            absolute

            right-2
            sm:right-8
            lg:-right-16

            -mt-2
            sm:-mt-4
            lg:-mt-6

            text-[30px]
            sm:text-[50px]
            md:text-[70px]
            lg:text-[110px]

            font-black
            text-white

            tracking-[-2px]
            sm:tracking-[-4px]
            lg:tracking-[-8px]
          "
        >
          WORLD
        </h1>

      </div>

      {/* BUTTON */}
      <button
        className="
          absolute

          right-4
          sm:right-10
          md:right-16
          lg:right-58

          top-[58%]
          lg:top-1/2

          -translate-y-1/2

          bg-gradient-to-r
          from-[#f03a00]
          to-[#ff9f43]

          px-5
          sm:px-8
          lg:px-28

          py-2
          sm:py-3
          lg:py-4

          text-white
          italic
          uppercase
          font-bold

          text-xs
          sm:text-sm
          lg:text-base

          tracking-[2px]
          sm:tracking-[3px]
          lg:tracking-[5px]

          skew-x-[-20deg]

          transition
          duration-300
          hover:scale-105
        "
      >
        <span className="block skew-x-[20deg]">
          Enter
        </span>
      </button>

    </div>

  </div>
</section>

{/* NEWS SECTION */}
<section className="relative overflow-hidden bg-black py-12 sm:py-16 lg:py-24">

  {/* ORANGE SHAPE */}
  <div
    className="
      absolute
      left-0
      top-0

      h-[45%]
      sm:h-[55%]
      lg:h-[65%]

      w-[90%]
      lg:w-[70%]

      bg-[#ff7300]
    "
    style={{
      clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 80%)",
    }}
  />

  {/* BLACK SHAPE */}
  <div
    className="
      absolute
      right-0
      bottom-0

      h-[15%]
      sm:h-[18%]
      lg:h-[20%]

      w-[85%]
      lg:w-[70%]

      bg-black
    "
    style={{
      clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
    }}
  />

  {/* MAIN CARD */}
  <div className="relative z-20 flex justify-center px-4">

    <div
      className="
        relative

        w-full
        sm:w-[90%]
        lg:w-[75%]

        overflow-hidden
      "
    >

      {/* IMAGE */}
      <img
        src="/news-banner.jpg"
        alt="news"
        className="
          w-full

          h-[280px]
          sm:h-[420px]
          md:h-[550px]
          lg:h-auto

          object-cover
        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center uppercase px-4">

        {/* TOP TITLE */}
        <h1
          className="
            text-[32px]
            sm:text-[50px]
            md:text-[70px]
            lg:text-[95px]

            font-black
            leading-none

            tracking-[-2px]
            lg:tracking-[-4px]

            text-[#ff7300]
          "
        >
          Puneri Paltan
        </h1>

        {/* BOTTOM TITLE */}
        <h1
          className="
            -mt-1
            sm:-mt-2

            text-[30px]
            sm:text-[48px]
            md:text-[70px]
            lg:text-[95px]

            font-black
            leading-none

            tracking-[-2px]
            lg:tracking-[-4px]

            text-white
          "
        >
          In The News
        </h1>

        {/* BUTTON */}
        <button
          className="
            mt-6
            sm:mt-8
            lg:mt-12

            bg-gradient-to-r
            from-[#f03a00]
            to-[#ff9f43]

            px-6
            sm:px-12
            lg:px-24

            py-2
            sm:py-3
            lg:py-4

            text-white
            italic
            uppercase
            font-bold

            text-xs
            sm:text-sm
            lg:text-base

            tracking-[2px]
            sm:tracking-[3px]
            lg:tracking-[5px]

            skew-x-[-20deg]

            transition
            duration-300
            hover:scale-105
          "
        >
          <span className="block skew-x-[20deg]">
            Enter
          </span>
        </button>

      </div>

    </div>

  </div>

  {/* RIGHT LINE */}
  <div
    className="
      absolute

      right-2
      sm:right-4
      lg:right-6

      top-1/2
      -translate-y-1/2

      h-20
      sm:h-28
      lg:h-40

      w-[3px]
      lg:w-[4px]

      bg-[#ff7300]
    "
  ></div>

</section>

{/* PARTNERS SECTION */}
<section className="relative bg-[#f3f3f3] pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20">

  {/* NEWSLETTER BAR */}
  <div className="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-1/2">

    <div
      className="
        w-[95vw]
        max-w-[1200px]

        bg-[#ff7300]

        px-4
        sm:px-8
        lg:px-16

        py-4
        sm:py-6
        lg:py-8

        flex
        flex-col
        lg:flex-row

        items-center
        gap-4
        lg:gap-10

        shadow-xl
      "
      style={{
        clipPath: "polygon(3% 0%, 100% 0%, 98% 100%, 0% 100%)",
      }}
    >
      <h2
        className="
          text-white
          font-bold
          uppercase
          text-center
          lg:text-left

          text-lg
          sm:text-2xl
          lg:text-3xl
        "
      >
        Subscribe To Our Newsletter
      </h2>

      <div className="flex w-full lg:w-auto">

        <input
          type="email"
          placeholder="Enter your email-id"
          className="
            flex-1
            lg:w-[350px]

            px-4
            sm:px-6

            py-3

            outline-none
            bg-white
            text-gray-700
          "
        />

        <button
          className="
            bg-gradient-to-r
            from-[#f03a00]
            to-[#ff9f43]

            px-5
            sm:px-8

            text-white
            font-bold
            italic
          "
        >
          Go
        </button>

      </div>

    </div>

  </div>

  {/* PARTNERS TITLE */}
  <div className="pt-20 sm:pt-24 text-center">

    <h1
      className="
        text-[42px]
        sm:text-[70px]
        md:text-[90px]
        lg:text-[120px]

        font-black
        uppercase
        text-[#ff7300]
      "
    >
      Partners
    </h1>

    <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col items-center">

      {/* Principal Partner */}
      <div className="text-center">

        <img
          src="/force_motors.png"
          alt="Force Motors"
          className="
            h-16
            sm:h-20
            lg:h-28

            object-contain
            mx-auto
          "
        />

        <p
          className="
            mt-4

            text-gray-700

            text-sm
            sm:text-lg
            lg:text-xl

            tracking-[2px]
            lg:tracking-[3px]
          "
        >
          Principal Partner
        </p>

      </div>

      {/* Associate Partners */}
      <div
        className="
          mt-10
          sm:mt-12
          lg:mt-16

          flex
          flex-col
          sm:flex-row

          justify-center

          gap-10
          sm:gap-16
          lg:gap-28
        "
      >

        <div className="text-center">

          <img
            src="/stihl-logo.png"
            alt="Stihl"
            className="
              h-12
              sm:h-14
              lg:h-16

              object-contain
              mx-auto
            "
          />

          <p
            className="
              mt-4

              text-gray-700

              text-sm
              sm:text-lg
              lg:text-xl

              leading-tight
              tracking-[2px]
            "
          >
            Associate-
            <br />
            Partner
          </p>

        </div>

        <div className="text-center">

          <img
            src="/navitas_sponsor.webp"
            alt="Navitas Solar"
            className="
              h-12
              sm:h-14
              lg:h-16

              object-contain
              mx-auto
            "
          />

          <p
            className="
              mt-4

              text-gray-700

              text-sm
              sm:text-lg
              lg:text-xl

              leading-tight
              tracking-[2px]
            "
          >
            Associate-
            <br />
            Partner
          </p>

        </div>

      </div>

      {/* Co Partner */}
      <div className="mt-12 sm:mt-16 lg:mt-20 text-center">

        <img
          src="/paras.webp"
          alt="Paras Buildtech"
          className="
            h-14
            sm:h-16
            lg:h-20

            object-contain
            mx-auto
          "
        />

        <p
          className="
            mt-4

            text-gray-700

            text-sm
            sm:text-lg
            lg:text-xl

            tracking-[2px]
          "
        >
          Co-Partner
        </p>

      </div>

      {/* Wellness Partner */}
      <div className="mt-12 sm:mt-16 lg:mt-20 text-center">

        <img
          src="/better.webp"
          alt="BetterAlt"
          className="
            h-10
            sm:h-12
            lg:h-14

            object-contain
            mx-auto
          "
        />

        <p
          className="
            mt-4

            text-gray-700

            text-sm
            sm:text-lg
            lg:text-xl

            tracking-[2px]
          "
        >
          Wellness Partner
        </p>

      </div>

      {/* Kit Partner */}
      <div className="mt-12 sm:mt-16 lg:mt-20 text-center">

        <img
          src="/shivnaresh-logo.webp"
          alt="Shiv Naresh"
          className="
            h-14
            sm:h-16
            lg:h-20

            object-contain
            mx-auto
          "
        />

        <p
          className="
            mt-4

            text-gray-700

            text-sm
            sm:text-lg
            lg:text-xl

            tracking-[2px]
          "
        >
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