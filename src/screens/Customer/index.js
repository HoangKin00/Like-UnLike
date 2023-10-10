import React, { useState } from "react";
import { PUBLIC_URL } from "../../utils/const";
import homeStyles from "./Home.module.scss";

const Customer = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  return (
    <div className={homeStyles["home"]}>
      <div className={homeStyles["home__view"]}>
        <img src={`${PUBLIC_URL}/icons/eye.svg`} alt="" />
        <span>278 lượt đọc</span>
      </div>
      <div className={homeStyles["home__vote"]}>
        <div className={homeStyles["home__icon"]}>
          <div
            className={homeStyles["home__img"]}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            <img
              src={
                isHovered1
                  ? `${PUBLIC_URL}/icons/like-hover.svg`
                  : `${PUBLIC_URL}/icons/like.svg`
              }
              alt=""
            />
          </div>
          <div
            className={homeStyles["home__img"]}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
          >
            <img
              src={
                isHovered2
                  ? `${PUBLIC_URL}/icons/unlike-hover.svg`
                  : `${PUBLIC_URL}/icons/unlike.svg`
              }
              alt=""
            />
          </div>
        </div>
        <span>Bài viết hữu ích</span>
      </div>
    </div>
  );
};

export default Customer;
