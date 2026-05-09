import React from "react";
import styles from "./Top_Hero.module.css";
import BackgroundImageHandler from "./Top_Hero_components/backgroundImageHandler";

const Top_Hero = () => {
  return (
    <section className={styles.Top_Hero_section}>
      <div className={styles.Top_Hero_container}>
        <BackgroundImageHandler />
      </div>
    </section>
  );
};

export default Top_Hero;
