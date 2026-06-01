import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers} from "../../redux/action/playerpage.action";
import PlayerSection from "../Player/PlayerSection";

const Players = () => {
  const dispatch = useDispatch();

  const { raiders, defenders, allrounders, isLoading, error } = useSelector(
    (state) => state.player,
  );

  useEffect(() => {
    dispatch(getPlayers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {/* HERO SECTION */}<section className="relative h-[70vh] overflow-hidden bg-black">

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/40 z-10"></div>

  {/* BANNER TITLE IMAGE */}
  <img
    src="/banner-title.png"
    alt="banner"
    className="absolute left-84 top-1/2 -translate-y-1/2 z-20 w-[500px]"
  />

  {/* TITLE */}
  <div className="absolute left-82 top-1/2 -translate-y-1/2 z-30">

    <h1 className="text-white text-7xl md:text-8xl font-black uppercase tracking-wide">
      Players
    </h1>

  </div>

  {/* PLAYER IMAGE */}
  <img
    src="/players_page_banner_desktop_S12.png"
    alt="player"
    className="absolute right-10 bottom-0 z-30 h-[95%] object-contain"
  />

</section>

      {/* ERROR */}
      {error && (
        <div className="text-center py-10 text-red-500 text-xl">{error}</div>
      )}

      {/* RAIDERS */}
      <PlayerSection title="Raiders" players={raiders} />

      {/* DEFENDERS */}
      <PlayerSection title="Defenders" players={defenders} />

      {/* ALL ROUNDERS */}
      <PlayerSection title="All Rounders" players={allrounders} />
    </>
  );
};

export default Players;
