import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Navbar.module.css";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const lastScroll = useRef(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // To hide and show the navbar based on scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollThreshold = 13;
      if (currentScroll < 50) {
        if (isHidden !== false) {
          setIsHidden(false);
        }
        lastScroll.current = currentScroll;
      } else {
        if (currentScroll > lastScroll.current + scrollThreshold) {
          if (isHidden !== true) {
            setIsHidden(true);
          }
          lastScroll.current = currentScroll;
          // console.log("scrolling down");
        } else if (currentScroll < lastScroll.current - scrollThreshold) {
          if (isHidden !== false) {
            setIsHidden(false);
          }
          lastScroll.current = currentScroll;
          // console.log("scrolling up");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden]);

  // Dark mode toggle with button click
  // useEffect(() => {
  //   document.documentElement.setAttribute(
  //     "data-theme",
  //     isDarkMode ? "dark" : "",
  //   );
  // }, [isDarkMode]);

  // mobile hide feature when screen size increase
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isHidden ? styles.navbarHidden : styles.navbarVisible}`}
    >
      <nav
        className={`flex justify-between items-center ${styles.navbar} relative`}
      >
        {/* Logo */}
        <div className={`${styles.logoSection}`}>
          <PiCodesandboxLogoFill size={35} color="var(--icon-color)" />
        </div>

        {/* Menu links */}
        <ul className={`${styles.linksSection} hidden md:flex gap-4`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Prints</a>
          </li>
          <li>
            <a href="#">Journals</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="flex gap-2">
          {/* Theme button  */}
          <button
            className={styles.themeBtn}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? (
              <FiMoon size={28} color="var(--icon-color)" />
            ) : (
              <FiSun size={28} color="var(--icon-color)" />
            )}
          </button>

          {/* Menu button */}
          <button
            className="md:hidden flex justify-center items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <IoMenu size={35} color="var(--icon-color)" />
          </button>
        </div>

        {/* Dropdown menu  */}
        <div
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.showMenu : styles.hideMenu}`}
        >
          <ul className={styles.mobileMenuList}>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#">Home</a>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#">Prints</a>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#">Journals</a>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#">Portfolio</a>
            </li>
            <li onClick={() => setIsMobileMenuOpen(false)}>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
