import React from "react";
import style from "./middle.module.scss";
function HomeFooter() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <strong>Sustainable Practices: </strong>We are committed to
        sustainability and ethical practices throughout our supply chain. From
        using eco-friendly materials to minimizing waste and reducing our carbon
        footprint, we strive to make fashion that's not only stylish but also
        environmentally conscious.
      </div>
      <div className={style.imgBox}>
        <img
          className={style.img}
          src="https://cdn.shopify.com/s/files/1/2303/2711/files/Fashion_Photography_for_E-Commerce_How_to_Capture_Your_Model_and_Clothing_in_the_Best_Light_2.jpg?v=1684706557"
          alt=""
        />
      </div>
    </div>
  );
}

export default HomeFooter;
