import { Link } from "react-router-dom";

const PaltanLinks = ({ links }) => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {links.map(({ title, image, link }) => (
          <Link
            key={title}
            to={link}
            className="
              group
              relative

              h-[220px]
              sm:h-[280px]
              md:h-[320px]
              lg:h-[400px]

              overflow-hidden
            "
          >
            <img
              src={image}
              alt={title}
              className="
                w-full
                h-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-all duration-500" />

            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h2
                className="
                  text-white

                  text-xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl

                  font-light
                  uppercase

                  tracking-[1px]
                  sm:tracking-[2px]
                  lg:tracking-[3px]

                  text-center
                "
              >
                {title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PaltanLinks;
