import { Link } from "react-router-dom";

const PaltanWorld = () => {
  return (
    <div className="bg-black text-white">

      <section className="bg-white">

        {/* HERO IMAGE */}
        <Link
          to="/puneri-tv"
          className="block relative overflow-hidden group"
        >
          <img
            src="/paltan-world-homepage_s12.png"
            alt="Paltan World"
            className="
              w-full
              h-[250px]
              sm:h-[400px]
              md:h-[550px]
              lg:h-[700px]
              object-cover
            "
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
              className="
                w-full
                h-[220px]
                sm:h-[320px]
                md:h-[450px]
                lg:h-[600px]
                object-cover
              "
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <h2
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center

                text-white

                text-3xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl

                font-black
                uppercase
                text-center
                px-4
              "
            >
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
              className="
                w-full
                h-[220px]
                sm:h-[320px]
                md:h-[450px]
                lg:h-[600px]
                object-cover
              "
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <h2
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center

                text-white

                text-3xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl

                font-black
                uppercase
                text-center
                px-4
              "
            >
              Gallery
            </h2>
          </Link>

          {/* WALLPAPERS */}
          <Link
            to="/wallpapers"
            className="relative overflow-hidden group"
          >
            <img
              src="/Wallpapers-s12.png"
              alt="Wallpapers"
              className="
                w-full
                h-[220px]
                sm:h-[320px]
                md:h-[450px]
                lg:h-[600px]
                object-cover
              "
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <h2
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center

                text-white

                text-3xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl

                font-black
                uppercase
                text-center
                px-4
              "
            >
              Wallpapers
            </h2>
          </Link>

          {/* EMPTY BOX */}
          <div className="hidden md:block bg-[#efefef]"></div>

        </div>

      </section>

    </div>
  );
};

export default PaltanWorld;