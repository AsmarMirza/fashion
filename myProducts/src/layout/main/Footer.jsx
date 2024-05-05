import React from "react";
import style from "./footer.module.scss";
function Footer() {
  return (
    <div>
      <footer>
        <div className={style.footerCommon}>
          <div className={style.footerLeft}>
            <h6 className={style.footerContactHeader}>CONTACT</h6>
            <p>Baku State University,23 A. Zahid Khalilov Street,Baku 1148</p>
            <p className={style.phone}>+1(123)-456-7890</p>
            <p className={style.email}>fashionforwardstyle@gmail.com</p>
          </div>
          <div className={style.footer}>
            <div className={style.socialAndText}>
              <div className={style.text}></div>
              <div className={style.social}>
                <div className={style.twt}>
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className={style.twt}>
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className={style.twt}>
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className={style.twt}>
                  <i className="fa-brands fa-pinterest"></i>
                </div>
                <div className={style.twt}>
                  <i className="fa-brands fa-github"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footerEnd}>
          {" "}
          <p className={style.footer__text}>
            Copyright ©2024 All rights reserved | This website is made with{" "}
            <i className="fa-solid fa-heart"></i> by Asmar Mirzayeva
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
