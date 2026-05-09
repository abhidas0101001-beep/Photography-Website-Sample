import React from "react";
import stylesbg from "./backgroundImageHandler.module.css";
import stylefg from "./foregroundContentHandler.module.css";
import Btn from "./Btn";

const BackgroundImageHandler = () => {
  return (
    <div className={stylesbg.bg_image_handler}>
      <Btn txt="Contact Me" />
    </div>
  );
};

export default BackgroundImageHandler;
