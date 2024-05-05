import React from 'react'
import { Link } from 'react-router-dom'
import style from "./navbar.module.scss"
function Navbar() {
  return (
    <div className={style.mainNavbar}>
       <h3 className={style.navbarHeading}> Fashion Forward Style </h3>
      <div className={style.navbar}>
      <Link to={"/"}>Main</Link>
      <Link to={"/AdminLayout/employees"}>Employees</Link>
      <Link to={"/AdminLayout/addemployees"}>Add employees</Link>
      </div>
      <div className={style.navIcon}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  )
}

export default Navbar
