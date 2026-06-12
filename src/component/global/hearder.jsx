import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Players", href: "/players" },
  { name: "Paltan World", href: "/paltan-world" },
  { name: "Tickets", href: "https://www.district.in/events/pkl-2025-chennai-team" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">
      {/* Navbar */}
      <nav
        className="
          relative
          flex
          items-center
          justify-center

          mt-4
          md:mt-6
          lg:mt-10

          mx-4
          md:mx-8
          lg:mx-20

          px-4
          sm:px-6
          lg:px-8

          py-4
          lg:py-5

          bg-black/20
          backdrop-blur-md
        "
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="
            absolute
            left-3
            sm:left-4
            md:left-6
            lg:left-10

            -top-5
            md:-top-7
            lg:-top-10

            z-50
          "
        >
          <img
            src="/logo.gif"
            alt="Puneri Paltan"
            className="
              w-16
              sm:w-20
              md:w-24
              lg:w-28
              object-contain
            "
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-14">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className="
                text-white
                text-base
                xl:text-lg
                font-bold
                tracking-[2px]
                uppercase
                hover:text-orange-400
                transition
              "
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="absolute right-4 md:right-6 lg:hidden text-white"
        >
          <Bars3Icon className="h-8 w-8" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        {/* Overlay */}
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />

        {/* Panel */}
        <DialogPanel
          className="
            fixed
            inset-y-0
            right-0
            z-50

            w-[85%]
            sm:w-[70%]

            bg-black
            p-6
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
              <img src="/logo.gif" alt="logo" className="w-20 object-contain" />
            </NavLink>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>

          {/* Links */}
          <div className="mt-10 flex flex-col gap-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="
                  text-white
                  text-lg
                  font-semibold
                  uppercase
                  tracking-wider
                  hover:text-orange-400
                  transition
                "
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
