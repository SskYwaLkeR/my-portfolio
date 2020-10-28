import { Link } from "gatsby"
import React from "react"
import "./header.styles.css"
import Hamburger from "../../assets/hamburger.svg"

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
        <div>
          {/* toggle dark mode  */}
          {/* <input type="checkbox" id="toggle-mode-cb" />

          <div id="mode-wrapper">
            <label id="toggle-mode" htmlFor="toggle-mode-cb">
              <span className="toggle-border">
                <span className="toggle-indicator"></span>
              </span>
            </label>
          </div> */}
          <button aria-label="Ham burger" onClick={() => openNav()}>
            <Hamburger />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
