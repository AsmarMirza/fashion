import React from "react";
import style from "./end.module.scss";
function HomeEnd() {
  return (
    <div className={style.container}>
      <div className={style.imgBox}>
        <img
          className={style.img}
          src="https://media.istockphoto.com/id/1307568521/photo/its-the-denim-that-does-it-for-me.jpg?s=612x612&w=0&k=20&c=0RQfpn8VJxXl6sO4aUehTsPvyYKGPwVwz1EdJRBU_Nw="
          alt=""
        />
      </div>
      <div className={style.text}>
        <strong>Customer Satisfaction: </strong> Our customers are at the heart
        of everything we do. We value your feedback and strive to provide
        exceptional customer service, ensuring that your shopping experience
        with us is seamless and enjoyable.
      </div>
    </div>
  );
}

export default HomeEnd;
