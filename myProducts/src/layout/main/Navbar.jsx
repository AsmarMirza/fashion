import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.scss";
import { MainContext } from "../../context/MainProvider";

function Navbar() {
  const {basket}=useContext(MainContext)
  return (
    <div className={style.mainNavbar}>
      <h3 className={style.navbarHeading}>
        Fashion <i className="fa-solid fa-shirt"></i>
      </h3>
      <div className={style.navbar}>
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/basket"}>Basket <button>{basket.length}</button></Link>
        <Link to={"/wishList"}>Favorities</Link>
        <Link to={"/AdminLayout"}>Admin</Link>
      </div>
      <div className={style.navIcon}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
