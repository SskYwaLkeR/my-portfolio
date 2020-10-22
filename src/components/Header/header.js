import { Link } from "gatsby"
import React from "react"
import "./header.styles.css"

const Header = () => {
  const openNav = () => {
    document.getElementById("myNav").style.height = "100%"
  }

  const closeNav = e => {
    e.preventDefault()
    document.getElementById("myNav").style.height = "0%"
  }
  return (
    <header>
      <div className="header-wrapper">
        <span>
          <Link to="/">Home</Link>
        </span>
        <div id="myNav" className="overlay">
          <Link to="/" className="closebtn" onClick={e => closeNav(e)}>
            &times;
          </Link>
          <div className="overlay-content">
            <Link to="/">About</Link>
            <Link to="/page-2">Services</Link>
            <Link to="/">Clients</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <button onClick={() => openNav()}>&#9776;</button>
      </div>
    </header>
  )
}

export default Header
