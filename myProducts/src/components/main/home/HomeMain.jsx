import React from "react";
import style from "./homeMain.module.scss";
import HomeTop from "./HomeTop";
function HomeMain() {
  return (
    <div className={style.container}>
      <h1 className={style.containerHeading}>Why choose us?</h1>
      <HomeTop></HomeTop>
    </div>
  );
}

export default HomeMain;
