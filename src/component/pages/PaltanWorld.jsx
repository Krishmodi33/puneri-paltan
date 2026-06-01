import { Link } from "react-router-dom";

const PaltanWorld = () => {
  const imagesData = [
    {
      image: "/tv-s12.png",
      title: "PUNERI TV",
      href: "/puneri-tv",
    },
    {
      image: "/gallery-s12.png",
      title: "GALLERY",
      href: "/gallery",
    },
    {
      image: "/Wallpapers-s12.png",
      title: "WALLPAPERS",
      href: "/wallpapers",
    },
  ];

  return (
    <div className="bg-black text-white">
     <section className="bg-white">
  <Link to="/puneri-tv" className="block relative overflow-hidden group">

    <img
      src="/paltan-world-homepage_s12.png"
      alt="Paltan World"
      className="w-full h-[700px] object-cover "
    />

    <div className="absolute inset-0 bg-black/20"></div>

  </Link>

  {/* BOTTOM GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2">

    {/* PUNERI TV */}
    <Link
      to="/puneri-tv"
      className="relative overflow-hidden group"
    >
      <img
        src="/tv-s12.png"
        alt="Puneri TV"
        className="w-full h-[600px] object-cover "
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-7xl font-black uppercase">
        Puneri TV
      </h2>
    </Link>

    {/* GALLERY */}
    <Link
      to="/gallery"
      className="relative overflow-hidden group"
    >
      <img
        src="/gallery-s12.png"
        alt="Gallery"
        className="w-full h-[600px] object-cover "
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-7xl font-black uppercase">
        Gallery
      </h2>
    </Link>

    {/* WALLPAPERS */}
    <Link
      to="/wallpapers"
      className="relative overflow-hidden group md:col-span-1"
    >
      <img
        src="/Wallpapers-s12.png"
        alt="Wallpapers"
        className="w-full h-[600px] object-cover "
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-7xl font-black uppercase">
        Wallpapers
      </h2>
    </Link>

    {/* EMPTY WHITE BOX */}
    <div className="hidden md:block bg-[#efefef]"></div>

  </div>

</section>
    </div>
  );
};

export default PaltanWorld;