import HeroBanner from "../global/HeroBanner";
import Footer from "../global/Footer.jsx";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getpuneritvSeasons } from "../redux/action/PuneriTv.action.js";
import { Link } from "react-router-dom";
import PaltanLinks from "../global/PaltanLinks";

const PuneriTv = () => {
  const { isLoading, seasons } = useSelector((state) => state.PuneriTvSeasons);
  const dispatch = useDispatch();

  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    dispatch(getpuneritvSeasons());
  }, [dispatch]);

  const season9 = seasons?.[0] || [];
  const season10 = seasons?.[1] || [];
  const season11 = seasons?.[2] || [];

  const seasonTabs = [
    { label: "Season 9", items: season9 },
    { label: "Season 10", items: season10 },
    { label: "Season 11", items: season11 },
  ];

  const gallerywallpaperblog = [
    { title: "Gallery", href: "/gallery-s12.png", to: "/gallery" },
    { title: "Wallpaper", href: "/Wallpapers-s12.png", to: "/wallpapers" },
    { title: "Blog", href: "/blogs-s12.png", to: "/blog" },
  ];

  const currentSeason = seasonTabs[selectedSeasonIndex]?.items || [];

  const pickVideoSource = (item) => {
    if (!item) return null;
    return (
      item.url ||
      item.video_url ||
      item.youtube_url ||
      item.link ||
      item.videoLink ||
      item.youtubeLink ||
      item.yt_url ||
      null
    );
  };

  const extractYoutubeId = (raw) => {
    if (!raw || typeof raw !== "string") return null;

    const value = raw.trim();
    if (!value) return null;

    // If API gives only the ID, keep it.
    if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value;

    try {
      const safeUrl = value.startsWith("http") ? value : `https://${value}`;
      const parsed = new URL(safeUrl);

      if (parsed.hostname.includes("youtu.be")) {
        return parsed.pathname.split("/").filter(Boolean)[0] || null;
      }

      if (parsed.pathname.includes("/embed/")) {
        return parsed.pathname.split("/embed/")[1]?.split("/")[0] || null;
      }

      return parsed.searchParams.get("v");
    } catch (error) {
      console.log("Invalid YouTube URL:", raw, error);
      return null;
    }
  };

  const parseStartSeconds = (t) => {
    if (!t) return null;
    if (/^\d+$/.test(t)) return t;

    let total = 0;
    const hours = t.match(/(\d+)h/);
    const minutes = t.match(/(\d+)m/);
    const seconds = t.match(/(\d+)s/);

    if (hours) total += Number(hours[1]) * 3600;
    if (minutes) total += Number(minutes[1]) * 60;
    if (seconds) total += Number(seconds[1]);

    return total > 0 ? String(total) : null;
  };

  const getYoutubeEmbedUrl = (rawUrl) => {
    if (!rawUrl || typeof rawUrl !== "string") return null;

    try {
      const safeUrl = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
      const parsed = new URL(safeUrl);
      const videoId = extractYoutubeId(rawUrl);
      console.log(videoId)

      if (!videoId) return null;

      const start = parseStartSeconds(parsed.searchParams.get("t"));
      const params = new URLSearchParams();

      if (start) params.set("start", start);
      params.set("autoplay", "1");
      params.set("rel", "0");

      return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    } catch (error) {
      console.log("Invalid YouTube URL:", rawUrl, error);
      return null;
    }
  };

  const getThumbnailUrl = (item) => {
    const rawUrl = pickVideoSource(item);
    const videoId = extractYoutubeId(rawUrl);

    if (!videoId) return "/fallback-thumbnail.jpg";
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const clickonplayBtn = (item) => {
    const rawUrl = pickVideoSource(item);
    const embedUrl = getYoutubeEmbedUrl(rawUrl);

    if (embedUrl) {
      setSelectedVideo(embedUrl);
    } else {
      console.log("No valid video URL found for this item:", item);
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const tvLinks = [
  {
    title: "GALLERY",
    image: "/gallery-s12.png",
    link: "/gallery",
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
    <div className="min-h-screen bg-[#0b0b0b] text-white">



<HeroBanner
  title="Puneri TV"
  bannerImage="/puneri-tv-bg.jpg"
  playerImage="/puneri-tv-desk-banner-s12.png"
/>


      <section className="bg-[#ececec] py-20">

  {/* TABS */}
  <div className="flex justify-center gap-3 mb-16">

    {seasonTabs.map((season, index) => (
      <button
        key={season.label}
        onClick={() => setSelectedSeasonIndex(index)}
        className={`
          px-10
          py-3
          text-white
          uppercase
          italic
          font-bold
          tracking-[3px]
          transition-all

          ${
            selectedSeasonIndex === index
              ? "bg-[#ff5a00]"
              : "bg-[#b8b8c8]"
          }
        `}
      >
        {season.label}
      </button>
    ))}

  </div>

  {/* VIDEOS */}
  {isLoading ? (
    <div className="text-center text-3xl font-bold text-black">
      Loading...
    </div>
  ) : currentSeason.length > 0 ? (

    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

      {currentSeason.map((item) => {
        const { id, name } = item;

        return (
          <div
            key={id}
            onClick={() => clickonplayBtn(item)}
            className="group cursor-pointer"
          >

            {/* IMAGE */}
            <div className="relative bg-black overflow-hidden">

              <img
                src={getThumbnailUrl(item)}
                alt={name}
                className="
                  w-full
                  h-[380px]
                  object-cover
                  transition-all
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div
                  className="
                    w-24
                    h-24
                    rounded-full
                    bg-[#12044f]/80
                    flex
                    items-center
                    justify-center
                  "
                >
                  <span className="text-white text-4xl">
                    ▶
                  </span>
                </div>

              </div>

            </div>

            {/* ORANGE TITLE BAR */}
            <div className="relative bg-[#ff5a00] px-8 py-3">

              <h3
                className="
                  text-white
                  italic
                  text-xl
                  tracking-[2px]
                  pr-12
                "
              >
                {name}
              </h3>

              {/* DOUBLE LINES */}
              <div
                className="
                  absolute
                  right-4
                  top-0
                  h-full
                  flex
                  gap-2
                "
              >
                <div className="w-2 h-full bg-white skew-x-[-15deg]"></div>
                <div className="w-2 h-full bg-white skew-x-[-15deg]"></div>
              </div>

            </div>

          </div>
        );
      })}

    </div>

  ) : (

    <div className="text-center text-3xl font-bold text-black">
      No Videos Found
    </div>

  )}

</section>

      {selectedVideo && (
        <section
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-2xl text-white"
            >
              ×
            </button>

            <iframe
              src={selectedVideo}
              title="Puneri TV Video"
              className="aspect-video w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

<PaltanLinks links={tvLinks} />

    </div>
  );
};

export default PuneriTv;