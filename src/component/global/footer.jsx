import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Copyright */}
        <div className="text-white text-lg mb-6 md:mb-0">
          Copyright © 2026 Puneri Paltan
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">

          <a
            href="#"
            className="w-14 h-14 rounded-full bg-[#3d3d52] flex items-center justify-center text-white text-xl hover:bg-orange-500 transition"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-14 h-14 rounded-full bg-[#3d3d52] flex items-center justify-center text-white text-xl hover:bg-orange-500 transition"
          >
            <FaTwitter />
          </a>

          <a
            href="#"
            className="w-14 h-14 rounded-full bg-[#3d3d52] flex items-center justify-center text-white text-xl hover:bg-orange-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-14 h-14 rounded-full bg-[#3d3d52] flex items-center justify-center text-white text-xl hover:bg-orange-500 transition"
          >
            <FaYoutube />
          </a>

        </div>

        {/* Managed By */}
        <div className="mt-6 md:mt-0">
          <img
            src="/dl_logo.png"
            alt="Managed By"
            className="h-10 object-contain"
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;