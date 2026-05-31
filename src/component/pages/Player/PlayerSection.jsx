import { Link } from "react-router-dom";

const PlayerSection = ({ title, players }) => {
  return (
    <section className="bg-[#e9e9e9] py-20">
      {/* TITLE BAR */}
      <div className="mb-16">
        <div className="inline-flex bg-[#ff4d00] px-16 py-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold italic uppercase tracking-[4px]">
            {title}
          </h2>
        </div>
      </div>

      {/* PLAYERS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {players?.map((player, index) => (
          <Link
  to={`/single-player/${player.id}`}
  key={player.id || index}
  className="group flex flex-col items-center text-center cursor-pointer perspective-[1000px]"
>
            <div
              className="
                relative
                w-[340px]
                h-[340px]
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
                    w-[320px]
                    h-[400px]
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
              <h3 className="text-[32px] font-light tracking-[2px] text-black">
                {player.name?.split(" ")[0]}
              </h3>

              <h3 className="text-[32px] font-black tracking-[2px] text-black">
                {player.name?.split(" ").slice(1).join(" ")}
              </h3>
            </div>

            {/* POSITION */}
            <p className="mt-4 text-[#ff5a00] text-2xl tracking-[2px] capitalize">
              {player.position}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PlayerSection;
