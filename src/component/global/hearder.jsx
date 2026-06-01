import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Players", href: "/players" },
  { name: "Paltan World", href: "/paltan-world" },
  { name: "Tickets", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] ">
      {/* Navbar */}
      <nav className="relative flex items-center justify-center mt-10 mx-4 lg:mx-24 px-8 py-5 bg-black/10 ">
        {/* Logo */}
        <NavLink
          to="/"
          className="absolute left-22 -top-10 z-50"
        >
          <img
            src="/logo.gif"
            alt="Puneri Paltan"
            className="w-28 md:w-34 object-contain cursor-pointer"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white text-lg font-bold tracking-[3px] uppercase hover:text-orange-400 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="absolute right-6 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-white"
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        {/* Overlay */}
        <div className="fixed inset-0 z-50 bg-black/70" />

        {/* Mobile Panel */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-[75%] bg-black p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between">
           <NavLink to="/">
              <img
                src="/logo.gif"
                alt="logo"
                className="w-24 cursor-pointer"
              />
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="mt-10 flex flex-col gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white text-lg font-semibold uppercase tracking-wider hover:text-orange-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
