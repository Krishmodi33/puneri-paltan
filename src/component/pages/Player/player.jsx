import HeroBanner from "../../global/HeroBanner";
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
<HeroBanner
  title="Players"
  bannerImage="/players-bg.jpg"
  playerImage="/players_page_banner_desktop_S12.png"
/>

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
