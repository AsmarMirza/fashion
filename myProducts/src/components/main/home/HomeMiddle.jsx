import React from "react";
import style from "./middle.module.scss";
function HomeMiddle() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <strong>Affordable Luxury: </strong>We believe that everyone deserves to
        experience the joy of high-quality fashion, which is why we offer
        affordable luxury without compromising on quality or style. Our aim is
        to make luxury accessible to all, allowing you to indulge in premium
        fashion without breaking the bank.
      </div>
      <div className={style.imgBox}>
        <img
          className={style.img}
          src="https://img.freepik.com/free-photo/fashion-photo-graceful-brunette-woman-spring-outfit-posing-holding-white-bag_273443-4124.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714694400&semt=ais"
          alt=""
        />
      </div>
    </div>
  );
}

export default HomeMiddle;
