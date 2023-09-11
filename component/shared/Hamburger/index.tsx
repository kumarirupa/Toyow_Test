import { useEffect, useState } from "react";

interface HamburgerData {  openMenu: (value: boolean) => void;}

export default function Hamburger(props: HamburgerData) {
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
  const genericHamburgerLine = `border border-white my-1 h-1 w-8 rounded-full bg-black transition ease transform duration-300`;

  useEffect(() => {
    props.openMenu(openMobileNav); //callback function from header component
  }, [openMobileNav]);

  return (
    <button
      className="flex flex-col h-12 w-12 lg:hidden border-black rounded justify-center items-center group"
      onClick={() => setOpenMobileNav(!openMobileNav)}
    >
      <div
        className={`${genericHamburgerLine} ${
          openMobileNav && "-rotate-45 translate-y-3 "
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          openMobileNav ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          openMobileNav && "rotate-45 -translate-y-3"
        }`}
      />
    </button>
  );
}
