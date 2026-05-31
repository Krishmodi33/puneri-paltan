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
      <section className="relative h-[80vh] overflow-hidden">

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/100 z-10"></div>

  {/* FIRE PARTICLES */}
  <div
    className="absolute inset-0 z-20 opacity-40"/>

  {/* CONTENT */}
  <div className="relative z-30 h-full max-w-7xl mx-auto">

    {/* PLAYER IMAGE */}
    <div className="absolute bottom-10 left-10 lg:left-20">

      <img
        src={imageSrc}
        alt={player.name}
        className="
          h-[600px]
          lg:h-[600px]
          object-contain
          drop-shadow-[0_0_30px_rgba(255,165,0,0.3)]
        "
      />

    </div>

    {/* PLAYER NAME */}
    <div className="absolute right-10 lg:right-24 top-1/2 -translate-y-1/2">

      <h1
        className="
          text-[#ff6600]
          font-black
          uppercase
          leading-[0.9]
          text-[70px]
          lg:text-[120px]
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
          text-[70px]
          lg:text-[120px]
        "
      >
        {player.name?.split(" ").slice(1).join(" ")}
      </h1>
    </div>
  </div>
</section>

<section
  className="relative bg-[#f4f4f4] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-start">

      {/* LEFT IMAGE */}
      <div className="flex justify-center">

        <img
          src={player.full_image}
          alt={player.name}
          className="h-[700px] object-contain"
        />

      </div>

      {/* RIGHT CONTENT */}
      <div>

        {/* TOP CARDS */}
        <div className="grid grid-cols-2 gap-12">

          <div className="text-center">

            <div className="inline-block bg-[#ff5a00] px-12 py-3 skew-x-[-20deg]">

              <h3 className="skew-x-[20deg] text-white font-bold text-2xl uppercase tracking-[3px] italic">
                Jersey No.
              </h3>

            </div>

            <p className="mt-6 text-4xl font-black text-black">
              {player.jersey_no || "-"}
            </p>

          </div>

          <div className="text-center">

            <div className="inline-block bg-[#ff5a00] px-12 py-3 skew-x-[-20deg]">

              <h3 className="skew-x-[20deg] text-white font-bold text-2xl uppercase tracking-[3px] italic">
                Position
              </h3>

            </div>

            <p className="mt-6 text-4xl font-black uppercase text-black">
              {player.position || "-"}
            </p>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-16 h-[1px] w-full bg-gray-300"></div>

        {/* VITALS HEADER */}
        <div className="mb-12">

          <div className="inline-block bg-[#ff5a00] px-14 py-3 skew-x-[-20deg]">

            <h3 className="skew-x-[20deg] text-white font-bold text-2xl uppercase tracking-[3px] italic">
              Vitals
            </h3>

          </div>

        </div>

        {/* VITALS */}
        <div className="space-y-10">

          <div className="grid grid-cols-2">

            <span className="text-gray-500 text-xl">
              Name
            </span>

            <span className="text-black text-xl font-medium">
              {player.name}
            </span>

          </div>

          <div className="grid grid-cols-2">

            <span className="text-gray-500 text-xl">
              Date of birth
            </span>

            <span className="text-black text-xl font-medium">
              {player.date_of_birth || "-"}
            </span>

          </div>

          <div className="grid grid-cols-2">

            <span className="text-gray-500 text-xl">
              Nationality
            </span>

            <span className="text-black text-xl font-medium">
              {player.nationality || "-"}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#e9e9e9] py-20">

  {/* TITLE */}
  <div className="text-center mb-20">
    <h2 className="text-[80px] lg:text-[100px] font-black uppercase text-[#ff5a00] leading-none">
      Statistics
    </h2>
  </div>

  {/* OVERALL */}
  <div className="mb-20">

  {/* TITLE LEFT */}
  <div className="flex justify-start mb-12">

    <div className="bg-[#ff4d00] px-24 py-4 relative">

      <h3 className="text-white text-3xl font-bold italic uppercase tracking-[10px]">
        Overall
      </h3>

      <div className="absolute right-[-40px] top-0 flex gap-2 h-full items-center">
        <div className="w-2 h-full bg-[#ff4d00] skew-x-[-15deg]"></div>
        <div className="w-2 h-full bg-[#ff4d00] skew-x-[-15deg]"></div>
      </div>

    </div>

  </div>

  {/* STATS CENTER */}
  <div className="flex flex-wrap justify-center items-center gap-8">

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
  <div className="mb-20">

    <div className="flex items-center mb-12">

      <div className="bg-[#ff4d00] px-24 py-4 relative">

        <h3 className="text-white text-3xl font-bold italic uppercase tracking-[10px]">
          Raid
        </h3>

        <div className="absolute right-[-40px] top-0 flex gap-2 h-full items-center">
          <div className="w-2 h-full bg-[#ff4d00] skew-x-[-15deg]"></div>
          <div className="w-2 h-full bg-[#ff4d00] skew-x-[-15deg]"></div>
        </div>

      </div>

    </div>

    <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1px_1fr] gap-10 items-center">

      <div className="grid grid-cols-2 gap-10">

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

      <div className="flex items-center justify-center gap-10">

        <div className="relative w-[230px] h-[230px] rounded-full border-[22px] border-orange-500 flex items-center justify-center">

          <div className="text-center">

            <h4 className="text-2xl uppercase tracking-wide">
              Total Raid
            </h4>

            <div className="text-6xl font-black">
              {player.total_ponints_earned || "0"}
            </div>

          </div>

        </div>

        <div>

          <div className="bg-white px-8 py-3 skew-x-[-15deg] inline-block">

            <span className="block skew-x-[15deg] text-4xl font-black">
              {player.not_out_percentage || "0%"}
            </span>

          </div>

          <p className="mt-4 text-xl uppercase">
            Raid Strike Rate
          </p>

        </div>

      </div>

    </div>

  </div>

  {/* TACKLES */}
  <div>

    <div className="flex items-center mb-12">

      <div className="bg-[#ff4d00] px-24 py-4 relative">

        <h3 className="text-white text-3xl font-bold italic uppercase tracking-[4px]">
          Tackles
        </h3>

        <div className="absolute right-[-40px] top-0 flex gap-2 h-full items-center">
          <div className="w-2 h-full bg-[#ff4d00] skew-x-[-15deg]"></div>
          <div className="w-2 h-full bg-[#ff4d00] skew-x-[-15deg]"></div>
        </div>

      </div>

    </div>

    <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_1px_1fr] gap-10 items-center">

      <div className="grid grid-cols-2 gap-10">

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

      <div className="flex items-center justify-center gap-10">

        <div
          className="relative w-[230px] h-[230px] rounded-full flex items-center justify-center"
          style={{
            background:
              "conic-gradient(#ff6a00 0deg 210deg,#0b0b4a 210deg 360deg)",
          }}
        >

          <div className="absolute w-[185px] h-[185px] rounded-full bg-[#e9e9e9]"></div>

          <div className="relative text-center">

            <h4 className="text-2xl uppercase">
              Total Tackle
            </h4>

            <div className="text-6xl font-black">
              {player.total_tacle_points || "0"}
            </div>

          </div>

        </div>

        <div>

          <div className="bg-white px-8 py-3 skew-x-[-15deg] inline-block">

            <span className="block skew-x-[15deg] text-4xl font-black">
              {player.not_out_percentage || "0%"}
            </span>

          </div>

          <p className="mt-4 text-xl uppercase">
            Tackle Strike Rate
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

<section className="bg-[#e9e9e9] py-24">

  <h2 className="text-center text-[70px] lg:text-[110px] font-black uppercase text-[#ff5a00] leading-none mb-16">
    Other Players
  </h2>

  <div className="max-w-7xl mx-auto px-6">

    {/* BUTTONS */}
    <div className="flex justify-center gap-4 mb-10">

      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="w-14 h-14 rounded-full bg-[#ff5a00] text-white text-3xl disabled:opacity-40"
      >
        ←
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex >= otherPlayers.length - visibleCards}
        className="w-14 h-14 rounded-full bg-[#ff5a00] text-white text-3xl disabled:opacity-40"
      >
        →
      </button>

    </div>

    {/* CARDS */}
    <div className="grid lg:grid-cols-2 gap-8">

      {otherPlayers
        .slice(currentIndex, currentIndex + visibleCards)
        .map((item) => (

          <Link
            to={`/single-player/${item.player_id || item.id}`}
            key={item.player_id || item.id}
            className="group"
          >

            <div className="relative bg-black h-[500px] overflow-hidden">

              {/* NUMBER */}
              <div className="absolute top-0 left-0 bg-[#ff5a00] px-6 py-4 z-20">

                <span className="text-white text-5xl font-light">
                  {item.jersey_no || "00"}
                </span>

              </div>

              {/* TEXT */}
              <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20">

                <h3 className="text-white text-4xl font-light uppercase">
                  {String(item.name || "").split(" ")[0]}
                </h3>

                <h2 className="text-white text-6xl font-black uppercase leading-none">
                  {String(item.name || "")
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                </h2>

                <p className="mt-3 text-[#ff5a00] text-2xl uppercase">
                  {item.position}
                </p>

              </div>

              {/* IMAGE */}
              <img
                src={
                  item.profile_image ||
                  item.full_image ||
                  item.image
                }
                alt={item.name}
                className="
                  absolute
                  bottom-0
                  right-0
                  h-[105%]
                  object-contain
                  transition-all
                  duration-500
                  group-hover:scale-105
                "
              />

            </div>

          </Link>

      ))}

    </div>

  </div>

</section>

    </>
  );
};

export default SinglePlayer;