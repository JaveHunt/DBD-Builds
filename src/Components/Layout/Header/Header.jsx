import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import ContentWrapper from "../ContentWrapper";
import Logo from "/images/Logo.webp";
import Hamburger from "/images/Icons/Hamburger.svg";
import discord from "/images/Icons/discord.svg";
import youtube from "/images/Icons/youtube.svg";
import twitch from "/images/Icons/twitch.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ContentWrapper>
      <header className="py-6">
        <nav>
          <ul className="flex justify-between items-center">
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-2.5 { isActive }"
              >
                <img className="w-[45px]" src={Logo} alt="Logo" />
                <h3 className="text-2xl font-semibold">JaveHunt</h3>
              </NavLink>
            </li>
            <li
              className="cursor-pointer lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <img className="w-[32px]" src={Hamburger} alt="Menu" />
            </li>
            <li className="hidden lg:block">
              <ul className="flex justify-center items-center gap-8">
                <li className="cursor-pointer">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `relative pb-1.5 transition-all duration-300 
     ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
     after:content-[''] after:absolute after:left-0 after:bottom-0 
     after:w-full after:h-[2px] after:bg-red-500 after:origin-left 
     after:transition-transform after:duration-300 after:ease-in-out
     hover:after:scale-x-100`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink
                    to="/killer-builds"
                    className={({ isActive }) =>
                      `relative pb-1.5 transition-all duration-300 
     ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
     after:content-[''] after:absolute after:left-0 after:bottom-0 
     after:w-full after:h-[2px] after:bg-red-500 after:origin-left 
     after:transition-transform after:duration-300 after:ease-in-out
     hover:after:scale-x-100`
                    }
                  >
                    Killer Builds
                  </NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink
                    to="/survivor-builds"
                    className={({ isActive }) =>
                      `relative pb-1.5 transition-all duration-300 
     ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
     after:content-[''] after:absolute after:left-0 after:bottom-0 
     after:w-full after:h-[2px] after:bg-red-500 after:origin-left 
     after:transition-transform after:duration-300 after:ease-in-out
     hover:after:scale-x-100`
                    }
                  >
                    Survivor Builds
                  </NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink
                    to="/build-generator"
                    className={({ isActive }) =>
                      `relative pb-1.5 transition-all duration-300 
     ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
     after:content-[''] after:absolute after:left-0 after:bottom-0 
     after:w-full after:h-[2px] after:bg-red-500 after:origin-left 
     after:transition-transform after:duration-300 after:ease-in-out
     hover:after:scale-x-100`
                    }
                  >
                    Build Generator
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="hidden lg:block">
              <ul className="flex justify-center items-center gap-4">
                <li>
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={discord} alt="discord"></img>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={youtube} alt="youtube"></img>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitch.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitch} alt="twitch"></img>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {isMenuOpen && (
          <Modal onClose={() => setIsMenuOpen(false)}>
            <ul className="flex flex-col gap-6 p-6 text-center text-lg font-medium relative">
              <li>
                <ul className="flex flex-col gap-2 mt-4">
                  <li>
                    <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                      {" "}
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/killer-builds"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {" "}
                      Killer Builds
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      to="/survivor-builds"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {" "}
                      Survivor Builds
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      to="/build-generator"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {" "}
                      Build Generator
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="flex justify-center gap-4 mt-4">
                <a href="#">
                  <img src={discord} alt="discord" />
                </a>
                <a href="#">
                  <img src={youtube} alt="youtube" />
                </a>
                <a href="#">
                  <img src={twitch} alt="twitch" />
                </a>
              </li>
              <button
                className="border-red-600 border-2 w-fit px-2  rounded-2xl absolute top-2 right-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                X
              </button>
            </ul>
          </Modal>
        )}
      </header>
    </ContentWrapper>
  );
};

export default Header;
