import React from "react";
import style from "./homeTop.module.scss";
function HomeTop() {
  return (
    <div className={style.topContainer}>
      <div className={style.homeTop}>
        <div className={style.topImgBox}>
          <img
            className={style.topImg}
            src="https://t4.ftcdn.net/jpg/04/84/87/61/360_F_484876187_u6HIlCgA2iZdfkoOamuQa43OJH2zaDVR.jpg"
            alt=""
          />
        </div>
        <div className={style.topText}>
          <strong>Attention to Detail:</strong> We pay meticulous attention to
          every detail, from the design concept to the finishing touches. Our
          focus on craftsmanship ensures that each garment is impeccably made,
          with carefully considered details that elevate the overall aesthetic.
        </div>
      </div>
    </div>
  );
}

export default HomeTop;
