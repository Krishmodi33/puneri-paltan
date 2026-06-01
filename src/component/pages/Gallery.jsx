import HeroBanner from "../global/HeroBanner";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGallery } from "../redux/action/Gallery.action";
import { Link } from "react-router-dom";
import PaltanLinks from "../global/PaltanLinks";

const Gallery = () => {
  const dispatch = useDispatch();

  const datas = useSelector(
    (state) => state.mainGallery.mainGallery
  );

  const [currentSeason, setCurrentSeason] = useState([]);
  const [activeSeason, setActiveSeason] = useState("Season 11");

  const season5 = datas.filter(
    ({ cat_name }) => cat_name === "Season 5"
  );

  const season7 = datas.filter(
    ({ cat_name }) => cat_name === "Season 7"
  );

  const season8 = datas.filter(
    ({ cat_name }) => cat_name === "Season 8"
  );

  const season11 = datas.filter(
    ({ cat_name }) => cat_name === "Season 11"
  );

  const seasonBtns = [
    {
      seasons: season5,
      name: "Season 5",
    },
    {
      seasons: season7,
      name: "Season 7",
    },
    {
      seasons: season8,
      name: "Season 8",
    },
    {
      seasons: season11,
      name: "Season 11",
    },
  ];

  const btnodSeason = (seasonData, seasonName) => {
    setCurrentSeason(seasonData);
    setActiveSeason(seasonName);
  };

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  useEffect(() => {
    if (season11.length) {
      setCurrentSeason(season11);
      setActiveSeason("Season 11");
    }
  }, [datas]);

  const galleryLinks = [
  {
    title: "PUNERI TV",
    image: "/tv-s12.png",
    link: "/puneri-tv",
  },
  {
    title: "WALLPAPERS",
    image: "/Wallpapers-s12.png",
    link: "/wallpapers",
  },
  {
    title: "BLOGS",
    image: "/blogs-s12.png",
    link: "/blogs",
  },
];


  return (
    <>
      <HeroBanner
        title="GALLERY"
        playerImage="/puneri-gallery-desk-banner-s12.png"
      />

      <div className="bg-[#ececec] pt-16">

        {/* SEASON BUTTONS */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">

          {seasonBtns.map(({ name, seasons }) => (
            <button
              key={name}
              onClick={() => btnodSeason(seasons, name)}
              className={`
                px-10
                py-3
                uppercase
                italic
                font-bold
                tracking-[3px]
                text-white
                transition-all
                duration-300

                ${
                  activeSeason === name
                    ? "bg-[#ff5a00]"
                    : "bg-[#b7b7c7]"
                }
              `}
            >
              {name}
            </button>
          ))}

        </div>

        {/* GALLERY GRID */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">

          {currentSeason.map(
            ({ id, name, main_image }) => (
              <Link
                key={id}
                to={`/single-gallary/${id}`}
                className="group block"
              >

                {/* IMAGE */}
                <div className="overflow-hidden bg-black">

                  <img
                    src={main_image}
                    alt={name}
                    className="
                      w-full
                      h-[480px]
                      object-cover
                      transition-all
                      duration-500
                      group-hover:scale-105
                    "
                  />

                </div>

                {/* ORANGE TITLE BAR */}
                <div className="relative bg-[#ff5a00] px-8 py-3">

                  <h3
                    className="
                      text-white
                      italic
                      uppercase
                      text-2xl
                      tracking-[2px]
                      pr-16
                      leading-tight
                    "
                  >
                    {name}
                  </h3>

                  {/* DOUBLE WHITE LINES */}
                  <div
                    className="
                      absolute
                      right-4
                      top-0
                      h-full
                      flex
                      gap-2
                      items-center
                    "
                  >
                    <div className="w-2 h-full bg-white skew-x-[-15deg]"></div>
                    <div className="w-2 h-full bg-white skew-x-[-15deg]"></div>
                  </div>

                </div>

              </Link>
            )
          )}

        </div>

      </div>
      <PaltanLinks links={galleryLinks} />
    </>
  );
};

export default Gallery;