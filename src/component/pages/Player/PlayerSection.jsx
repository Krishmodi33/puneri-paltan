import { Link } from "react-router-dom";

const PlayerSection = ({ title, players }) => {
  return (
    <section className="bg-[#e9e9e9] py-10 sm:py-14 lg:py-20">
      {/* TITLE BAR */}
      <div className="mb-16">
        <div
          className=" inline-flex
    bg-[#ff4d00]

    px-6
    sm:px-10
    lg:px-16

    py-3
    lg:py-4"
        >
          <h2
            className="text-white text-xl
sm:text-2xl
md:text-3xl
lg:text-4xl font-bold italic uppercase tracking-[4px]"
          >
            {title}
          </h2>
        </div>
      </div>

      {/* PLAYERS GRID */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3

gap-10
md:gap-14
lg:gap-20"
      >
        {players?.map((player, index) => (
          <Link
            to={`/single-player/${player.id}`}
            key={player.id || index}
            className="group flex flex-col items-center text-center cursor-pointer perspective-[1000px]"
          >
            <div
              className="
                relative
                w-[220px]
h-[220px]

sm:w-[260px]
sm:h-[260px]

md:w-[300px]
md:h-[300px]

lg:w-[340px]
lg:h-[340px]
                rounded-full
                transition-all
                duration-700
                ease-out
                [transform-style:preserve-3d]
                group-hover:[transform:rotateY(20deg)_translateX(-20px)]                
                "
            >
              {/* PLAYER IMAGE */}
              <img
                src={player.profile_image}
                alt={player.name}
                className="
                    absolute
                    top-0
                    left-1/2
                    -translate-x-1/2
                   w-[210px]
h-[260px]

sm:w-[240px]
sm:h-[300px]

md:w-[280px]
md:h-[350px]

lg:w-[320px]
lg:h-[400px]
                    object-contain
                    object-top
                    z-10
                    transition-all
                    duration-700
                    group-hover:scale-110
                "
              />
            </div>

            {/* PLAYER NAME */}
            <div className="mt-6 leading-none">
              <h3
                className="text-xl
sm:text-2xl
lg:text-[32px] font-light tracking-[2px] text-black"
              >
                {player.name?.split(" ")[0]}
              </h3>

              <h3
                className="text-xl
sm:text-2xl
lg:text-[32px]
tracking-[2px]
text-black"
              >
                {player.name?.split(" ").slice(1).join(" ")}
              </h3>
            </div>

            {/* POSITION */}
            <p
              className="mt-4 text-[#ff5a00] text-base
sm:text-lg
lg:text-2xl tracking-[2px] capitalize"
            >
              {player.position}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PlayerSection;
