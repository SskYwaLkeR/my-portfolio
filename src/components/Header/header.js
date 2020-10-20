import { Link } from "gatsby"
import React from "react"
import "./header.styles.css"

const Header = () => (
  <header>
    <div className="header-wrapper">
      <span>
        <Link to="/">Portfolio</Link>
      </span>
    </div>
  </header>
)

export default Header
