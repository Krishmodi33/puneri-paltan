import HeroBanner from "../global/HeroBanner";
import PaltanLinks from "../global/PaltanLinks";

const Wallpaper = () => {
  const wallpaperLinks = [
    {
      title: "GALLERY",
      image: "/gallery-s12.png",
      link: "/gallery",
    },
    {
      title: "PUNERI TV",
      image: "/tv-s12.png",
      link: "/puneri-tv",
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
        title="WALLPAPERS"
        playerImage="/puneri-wallpapers-desk-banner-s12.png"
      />

      <PaltanLinks links={wallpaperLinks} />
    </>
  );
};

export default Wallpaper;
