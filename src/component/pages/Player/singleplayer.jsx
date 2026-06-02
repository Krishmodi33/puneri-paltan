import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePlayer } from "../../redux/action/singlePlayer.action";
import StatCard from "./StatCard";
import { getPlayers} from "../../redux/action/playerpage.action";


const SinglePlayer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);

const visibleCards = 2;

const handleNext = () => {
  if (currentIndex < otherPlayers.length - visibleCards) {
    setCurrentIndex(currentIndex + 1);
  }
};

const handlePrev = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};

  const { player, isLoading, error } = useSelector(
    (state) => state.singlePlayer
  );

  const { raiders, defenders, allrounders } = useSelector(
  (state) => state.player
);

const allPlayers = [
  ...(raiders || []),
  ...(defenders || []),
  ...(allrounders || []),
];

  useEffect(() => {
    if (id) {
      dispatch(getSinglePlayer(id));
    }
  }, [dispatch, id]);
  
  useEffect(() => {
  dispatch(getPlayers());
}, [dispatch]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Loading Player...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-red-500 text-3xl font-bold">
          {error}
        </h1>
      </div>
    );
  }

  if (!player) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-3xl">
          No Player Found
        </h1>
      </div>
    );
  }

  const imageSrc =
    player.profile_image ||
    player.full_image ||
    player.image;



const otherPlayers = allPlayers.filter(
  (p) =>
    String(p.player_id || p.id) !==
    String(player.player_id || player.id)
);
  return (
    <>
<section className="relative overflow-hidden bg-black min-h-[500px] sm:min-h-[650px] lg:h-[80vh]">

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black z-10" />

  {/* CONTENT */}
  <div
    className="
      relative
      z-30
      max-w-7xl
      mx-auto
      h-full

      px-4
      sm:px-8
      lg:px-12

      flex
      flex-col
      lg:flex-row

      items-center
      justify-center
      lg:justify-between
    "
  >

    {/* PLAYER IMAGE */}
    <div
      className="
        order-1
        lg:order-none

        flex
        justify-center
        items-end

        w-full
        lg:w-1/2

        mt-10
        lg:mt-0
      "
    >
      <img
        src={imageSrc}
        alt={player.name}
        className="
          h-[260px]
          sm:h-[380px]
          md:h-[500px]
          lg:h-[650px]

          object-contain

          drop-shadow-[0_0_30px_rgba(255,165,0,0.3)]
        "
      />
    </div>

    {/* PLAYER NAME */}
    <div
      className="
        order-2
        lg:order-none

        w-full
        lg:w-1/2

        text-center
        lg:text-right

        pb-8
        lg:pb-0
      "
    >
      <h1
        className="
          text-[#ff6600]
          font-black
          uppercase
          leading-[0.9]

          text-[38px]
          sm:text-[55px]
          md:text-[75px]
          lg:text-[110px]
          xl:text-[130px]
        "
      >
        {player.name?.split(" ")[0]}
      </h1>

      <h1
        className="
          text-[#ff6600]
          font-black
          uppercase
          leading-[0.9]

          text-[38px]
          sm:text-[55px]
          md:text-[75px]
          lg:text-[110px]
          xl:text-[130px]
        "
      >
        {player.name?.split(" ").slice(1).join(" ")}
      </h1>
    </div>

  </div>
</section>

<section className="relative bg-[#f4f4f4] py-10 sm:py-14 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

      {/* LEFT IMAGE */}
      <div className="flex justify-center">

        <img
          src={player.full_image}
          alt={player.name}
          className="
            h-[280px]
            sm:h-[400px]
            md:h-[550px]
            lg:h-[700px]
            object-contain
          "
        />

      </div>

      {/* RIGHT CONTENT */}
      <div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 lg:gap-12">

          {/* JERSEY */}
          <div className="text-center">

            <div className="inline-block bg-[#ff5a00] px-6 sm:px-8 lg:px-12 py-3 skew-x-[-20deg]">

              <h3 className="skew-x-[20deg] text-white font-bold text-lg sm:text-xl lg:text-2xl uppercase tracking-[2px] italic">
                Jersey No.
              </h3>

            </div>

            <p className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-black text-black">
              {player.jersey_no || "-"}
            </p>

          </div>

          {/* POSITION */}
          <div className="text-center">

            <div className="inline-block bg-[#ff5a00] px-6 sm:px-8 lg:px-12 py-3 skew-x-[-20deg]">

              <h3 className="skew-x-[20deg] text-white font-bold text-lg sm:text-xl lg:text-2xl uppercase tracking-[2px] italic">
                Position
              </h3>

            </div>

            <p className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-black">
              {player.position || "-"}
            </p>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 sm:my-12 lg:my-16 h-[1px] w-full bg-gray-300"></div>

        {/* VITALS HEADER */}
        <div className="mb-8 sm:mb-10 lg:mb-12">

          <div className="inline-block bg-[#ff5a00] px-8 sm:px-10 lg:px-14 py-3 skew-x-[-20deg]">

            <h3 className="skew-x-[20deg] text-white font-bold text-lg sm:text-xl lg:text-2xl uppercase tracking-[2px] italic">
              Vitals
            </h3>

          </div>

        </div>

        {/* VITALS */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="grid grid-cols-2 gap-4">

            <span className="text-gray-500 text-sm sm:text-lg lg:text-xl">
              Name
            </span>

            <span className="text-black text-sm sm:text-lg lg:text-xl font-medium break-words">
              {player.name}
            </span>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <span className="text-gray-500 text-sm sm:text-lg lg:text-xl">
              Date of birth
            </span>

            <span className="text-black text-sm sm:text-lg lg:text-xl font-medium">
              {player.date_of_birth || "-"}
            </span>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <span className="text-gray-500 text-sm sm:text-lg lg:text-xl">
              Nationality
            </span>

            <span className="text-black text-sm sm:text-lg lg:text-xl font-medium">
              {player.nationality || "-"}
            </span>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>


<section className="bg-[#e9e9e9] py-12 sm:py-16 lg:py-20">

  {/* TITLE */}
  <div className="text-center mb-12 sm:mb-16 lg:mb-20">
    <h2
      className="
        text-[40px]
        sm:text-[60px]
        md:text-[80px]
        lg:text-[100px]
        font-black
        uppercase
        text-[#ff5a00]
        leading-none
      "
    >
      Statistics
    </h2>
  </div>

  {/* OVERALL */}
  <div className="mb-16 lg:mb-20">

    {/* TITLE */}
    <div className="flex justify-start mb-8 lg:mb-12">

      <div className="bg-[#ff4d00] px-6 sm:px-12 lg:px-24 py-3 lg:py-4 relative">

        <h3
          className="
            text-white
            text-lg
            sm:text-2xl
            lg:text-3xl
            font-bold
            italic
            uppercase
            tracking-[2px]
            sm:tracking-[6px]
            lg:tracking-[10px]
          "
        >
          Overall
        </h3>

        <div className="absolute right-[-20px] lg:right-[-40px] top-0 flex gap-2 h-full items-center">
          <div className="w-2 h-full bg-[#ff4d00] skew-x-[-15deg]"></div>
          <div className="w-2 h-full bg-[#ff4d00] skew-x-[-15deg]"></div>
        </div>

      </div>

    </div>

    {/* STATS */}
    <div
      className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8

        grid
        grid-cols-2
        lg:grid-cols-4

        gap-4
        sm:gap-6
        lg:gap-8
      "
    >

      <StatCard
        value={player.Matches_played || "0"}
        label="MATCHES PLAYED"
      />

      <StatCard
        value={player.total_ponints_earned || "0"}
        label="TOTAL POINTS EARNED"
      />

      <StatCard
        value={player.most_points_in_a_match || "0"}
        label="MOST POINTS IN A MATCH"
      />

      <StatCard
        value={player.not_out_percentage || "0%"}
        label="NOT OUT PERCENTAGE"
      />

    </div>

  </div>

  {/* RAID */}
  <div className="mb-16 lg:mb-20">

    <div className="flex items-center mb-8 lg:mb-12">

      <div className="bg-[#ff4d00] px-6 sm:px-12 lg:px-24 py-3 lg:py-4 relative">

        <h3
          className="
            text-white
            text-lg
            sm:text-2xl
            lg:text-3xl
            font-bold
            italic
            uppercase
            tracking-[2px]
            sm:tracking-[6px]
            lg:tracking-[10px]
          "
        >
          Raid
        </h3>

        <div className="absolute right-[-20px] lg:right-[-40px] top-0 flex gap-2 h-full items-center">
          <div className="w-2 h-full bg-[#ff4d00] skew-x-[-15deg]"></div>
          <div className="w-2 h-full bg-[#ff4d00] skew-x-[-15deg]"></div>
        </div>

      </div>

    </div>

    <div
      className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8

        grid
        grid-cols-1
        lg:grid-cols-[2fr_1px_1fr]

        gap-8
        lg:gap-10
        items-center
      "
    >

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-6
          lg:gap-10
        "
      >

        <StatCard
          value={player.no_of_super_raids || "0"}
          label="NO OF SUPER RAIDS"
        />

        <StatCard
          value={player.super_10s || "0"}
          label="SUPER 10s"
        />

        <StatCard
          value={player.avg_raid_points || "0"}
          label="AVG. RAID POINTS"
        />

      </div>

      <div className="hidden lg:block h-[280px] bg-gray-300"></div>

      <div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-6
          lg:gap-10
        "
      >

        <div
          className="
            relative
            w-[160px]
            h-[160px]

            sm:w-[200px]
            sm:h-[200px]

            lg:w-[230px]
            lg:h-[230px]

            rounded-full
            border-[14px]
            sm:border-[18px]
            lg:border-[22px]
            border-orange-500

            flex
            items-center
            justify-center
          "
        >

          <div className="text-center">

            <h4 className="text-lg sm:text-xl lg:text-2xl uppercase">
              Total Raid
            </h4>

            <div className="text-3xl sm:text-5xl lg:text-6xl font-black">
              {player.total_ponints_earned || "0"}
            </div>

          </div>

        </div>

        <div className="text-center sm:text-left">

          <div className="bg-white px-4 sm:px-6 lg:px-8 py-3 skew-x-[-15deg] inline-block">

            <span className="block skew-x-[15deg] text-2xl sm:text-3xl lg:text-4xl font-black">
              {player.not_out_percentage || "0%"}
            </span>

          </div>

          <p className="mt-4 text-base sm:text-lg lg:text-xl uppercase">
            Raid Strike Rate
          </p>

        </div>

      </div>

    </div>

  </div>

  {/* TACKLES */}
  <div>

    <div className="flex items-center mb-8 lg:mb-12">

      <div className="bg-[#ff4d00] px-6 sm:px-12 lg:px-24 py-3 lg:py-4 relative">

        <h3
          className="
            text-white
            text-lg
            sm:text-2xl
            lg:text-3xl
            font-bold
            italic
            uppercase
            tracking-[2px]
            sm:tracking-[6px]
            lg:tracking-[10px]
          "
        >
          Tackles
        </h3>

      </div>

    </div>

    <div
      className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8

        grid
        grid-cols-1
        lg:grid-cols-[2fr_1px_1fr]

        gap-8
        lg:gap-10

        items-center
      "
    >

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2

          gap-6
          lg:gap-10
        "
      >

        <StatCard
          value={player.no_of_super_tackles || "0"}
          label="NO. OF SUPER TACKLES"
        />

        <StatCard
          value={player.total_tacle_points || "0"}
          label="TOTAL TACKLE POINTS"
        />

      </div>

      <div className="hidden lg:block h-[220px] bg-gray-300"></div>

      <div
        className="
          flex
          flex-col
          sm:flex-row

          items-center
          justify-center

          gap-6
          lg:gap-10
        "
      >

        <div
          className="
            relative
            w-[160px]
            h-[160px]

            sm:w-[200px]
            sm:h-[200px]

            lg:w-[230px]
            lg:h-[230px]

            rounded-full
            flex
            items-center
            justify-center
          "
          style={{
            background:
              "conic-gradient(#ff6a00 0deg 210deg,#0b0b4a 210deg 360deg)",
          }}
        >

          <div
            className="
              absolute
              w-[125px]
              h-[125px]

              sm:w-[160px]
              sm:h-[160px]

              lg:w-[185px]
              lg:h-[185px]

              rounded-full
              bg-[#e9e9e9]
            "
          />

          <div className="relative text-center">

            <h4 className="text-lg sm:text-xl lg:text-2xl uppercase">
              Total Tackle
            </h4>

            <div className="text-3xl sm:text-5xl lg:text-6xl font-black">
              {player.total_tacle_points || "0"}
            </div>

          </div>

        </div>

        <div className="text-center sm:text-left">

          <div className="bg-white px-4 sm:px-6 lg:px-8 py-3 skew-x-[-15deg] inline-block">

            <span className="block skew-x-[15deg] text-2xl sm:text-3xl lg:text-4xl font-black">
              {player.not_out_percentage || "0%"}
            </span>

          </div>

          <p className="mt-4 text-base sm:text-lg lg:text-xl uppercase">
            Tackle Strike Rate
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

    </>
  );
};

export default SinglePlayer;