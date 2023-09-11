import Image from "next/image";
import DarkModeToggle from "../ToggleTheme";
import { useState } from "react";
import Hamburger from "../Hamburger";

export default function Header() {
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-black dark:border-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pb-4 pt-5 sm:pb-6 sm:pt-6 lg:pb-4 lg:pt-12 border-b border-gray-100">
        <a href="#" className="flex items-center">
          <Image
            src="https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg"
            className="h-8 mr-3 dark:invert"
            alt="Flowbite Logo"
            width={100}
            height={30}
          />
          <span className="self-center text-xs whitespace-nowrap dark:text-black hiring-badge ml-1">
            We are hiring!
          </span>
        </a>
        <div className="flex">
          <button className="rounded-3xl hidden sm:block md:hidden lg:hidden bg-white text-gray-600 border border-gray-400  px-4 py-2 transition duration-300 ease-in-ou hover:text-white hover:bg-black hover:border-black hover:dark:text-black hover:dark:bg-white">
            Get in Touch
          </button>

          {/* Hamburger menu seperate component using callback props */}
          <Hamburger
            openMenu={(e: boolean) => {
              setOpenMobileNav(e); //Changing state for mobile nav menu
            }}
          />
        </div>
        <div
          className={`w-full lg:block lg:w-auto ${!openMobileNav && `hidden`}`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col items-center font-medium p-4 lg:p-0 mt-4 border border-black bg-black dark:bg-white lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-black lg:dark:bg-black dark:border-black">
            <li className="lg: w-full">
              <a
                href="#"
                className="text-sm border-bottom-tramsition block py-2 pl-3 pr-4 text-white bg-black dark:bg-white dark:text-black rounded lg:bg-transparent lg:text-black lg:p-0 lg:dark:text-white dark:bg-black lg:dark:bg-transparent"
              >
                <span className="link link-underline link-underline-black">
                  Works
                </span>
              </a>
            </li>
            <li className="lg: w-full">
              <a
                href="#"
                className="text-sm border-bottom-tramsition block py-2 pl-3 pr-4 text-white bg-black dark:bg-white dark:text-black rounded lg:bg-transparent lg:text-black lg:p-0 lg:dark:text-white dark:bg-black lg:dark:bg-transparent"
              >
                <span className="link link-underline link-underline-black">
                  Services
                </span>
              </a>
            </li>
            <li className="lg: w-full">
              <a
                href="#"
                className="text-sm border-bottom-tramsition block py-2 pl-3 pr-4 text-white bg-black dark:bg-white dark:text-black rounded lg:bg-transparent lg:text-black lg:p-0 lg:dark:text-white dark:bg-black lg:dark:bg-transparent"
              >
                <span className="link link-underline link-underline-black">
                  About
                </span>
              </a>
            </li>
            <li className="lg: w-full">
              <a
                href="#"
                className="text-sm border-bottom-tramsition block py-2 pl-3 pr-4 text-white bg-black dark:bg-white dark:text-black rounded lg:bg-transparent lg:text-black lg:p-0 lg:dark:text-white dark:bg-black lg:dark:bg-transparent"
              >
                <span className="link link-underline link-underline-black">
                  Blog
                </span>
              </a>
            </li>
            <li className="lg: w-full">
              <a
                href="#"
                className="text-sm border-bottom-tramsition block py-2 pl-3 pr-4 text-white bg-black dark:bg-white dark:text-black rounded lg:bg-transparent lg:text-black lg:p-0 lg:dark:text-white dark:bg-black lg:dark:bg-transparent"
              >
                <span className="link link-underline link-underline-black">
                  Pages
                </span>
              </a>
            </li>
            <li>
              <button className="text-sm rounded-3xl hidden sm:hidden md:hidden lg:block whitespace-nowrap  bg-white text-gray-600 border border-gray-400  px-6 py-2.5 transition duration-300 ease-in-out hover:text-white hover:bg-black hover:border-black hover:dark:text-black hover:dark:bg-white">
                Get in Touch
              </button>
            </li>
            <li className="w-full mt-7">
              <button className="w-full rounded-full sm:block lg:hidden lg:hidden bg-white text-black dark:text-white dark:bg-black px-7 mb-2 servic_btn ">
                More Templates
              </button>
            </li>
            <li className="margin-auto">
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
