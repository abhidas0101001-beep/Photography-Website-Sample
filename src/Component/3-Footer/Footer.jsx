import React from "react";
import styles from "../3-Footer/Footer.module.css";
import { FaTelegram, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <section className={styles.container}>
        <div className={styles.leftSection}>
          <p className={styles.text}>
            © 2026 | Built from scratch by Abhi Das <br />
            Crafted with React, CSS, GSAP. Hosted on Netlify.
          </p>
        </div>

        <div className={styles.contactWrapper}>
          <span className={styles.contactLabel}>Contact me:</span>
          <div className={styles.iconGroup}>
            <a
              href="https://t.me/Abhi0101001"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.telegram}
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="https://github.com/abhidas0101001-beep"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.github}
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/abhidas83724s/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagram}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/Calc81805707"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.twitter}
              aria-label="Twitter"
            >
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
