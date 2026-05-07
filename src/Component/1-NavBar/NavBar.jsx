import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Navbar.module.css";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode toggle with button click
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "",
    );
  }, [isDarkMode]);

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
    <header className="w-full">
      <nav
        className={`flex justify-between items-center ${styles.navbar} relative`}
      >
        {/* Logo */}
        <div className={`${styles.logoSection}`}>
          <PiCodesandboxLogoFill size={35} color="var(--icon-color)" />
        </div>

        {/* Menu links */}
        <ul className={`${styles.linksSection} hidden md:flex gap-4`}>
          <li>Home</li>
          <li>Prints</li>
          <li>Journals</li>
          <li>Portfolio</li>
          <li>About</li>
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
            <li onClick={() => setIsMobileMenuOpen(false)}>Home</li>
            <li onClick={() => setIsMobileMenuOpen(false)}>Prints</li>
            <li onClick={() => setIsMobileMenuOpen(false)}>Journals</li>
            <li onClick={() => setIsMobileMenuOpen(false)}>Portfolio</li>
            <li onClick={() => setIsMobileMenuOpen(false)}>About</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
