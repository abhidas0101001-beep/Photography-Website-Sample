import React from "react";
import styles from "../3-Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <section>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </section>
    </footer>
  );
};

export default Footer;
