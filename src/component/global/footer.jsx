import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-6 sm:py-8">
      <div
        className="
          max-w-7xl
          mx-auto

          px-4
          sm:px-6
          lg:px-8

          flex
          flex-col
          lg:flex-row

          items-center
          justify-between

          gap-6
          lg:gap-0
        "
      >
        {/* Copyright */}
        <div
          className="
            text-white

            text-sm
            sm:text-base
            lg:text-lg

            text-center
            lg:text-left
          "
        >
          Copyright © 2026 Puneri Paltan
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="#"
            className="
              w-10
              h-10
              sm:w-12
              sm:h-12
              lg:w-14
              lg:h-14

              rounded-full
              bg-[#3d3d52]

              flex
              items-center
              justify-center

              text-white

              text-sm
              sm:text-lg
              lg:text-xl

              hover:bg-orange-500
              transition
            "
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="
              w-10
              h-10
              sm:w-12
              sm:h-12
              lg:w-14
              lg:h-14

              rounded-full
              bg-[#3d3d52]

              flex
              items-center
              justify-center

              text-white

              text-sm
              sm:text-lg
              lg:text-xl

              hover:bg-orange-500
              transition
            "
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            className="
              w-10
              h-10
              sm:w-12
              sm:h-12
              lg:w-14
              lg:h-14

              rounded-full
              bg-[#3d3d52]

              flex
              items-center
              justify-center

              text-white

              text-sm
              sm:text-lg
              lg:text-xl

              hover:bg-orange-500
              transition
            "
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="
              w-10
              h-10
              sm:w-12
              sm:h-12
              lg:w-14
              lg:h-14

              rounded-full
              bg-[#3d3d52]

              flex
              items-center
              justify-center

              text-white

              text-sm
              sm:text-lg
              lg:text-xl

              hover:bg-orange-500
              transition
            "
          >
            <FaYoutube />
          </a>
        </div>

        {/* Managed By */}
        <div>
          <img
            src="/dl_logo.png"
            alt="Managed By"
            className="
              h-8
              sm:h-10
              lg:h-12

              object-contain
            "
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
