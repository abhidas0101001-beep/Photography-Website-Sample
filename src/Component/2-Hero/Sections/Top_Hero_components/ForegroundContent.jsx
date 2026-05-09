import React from "react";
import Btn from "./Btn";
import Heading from "./Foreground_content_components/Heading";
import SupportingText from "./Foreground_content_components/SupportingText";
import styles from "./Foreground.module.css";

const ForegroundContent = () => {
  return (
    <div>
      <div className={styles.content_container}>
        <div className={styles.content}>
          <Heading />
          <SupportingText />
        </div>
        <Btn txt="Contact Me" />
      </div>
    </div>
  );
};

export default ForegroundContent;
