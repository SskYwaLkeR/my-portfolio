import React from "react"
import "./instagram.styles.css"
const Instagram = () => (
  <div className="instagram-wrapper">
    <div className="insta-text">
      <h2>I sometime design cool stuff on instagram</h2>
      <a
        href="https://www.instagram.com/hrishi_kesh_rai/"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Instagram"
      >
        <b> See more {">"}</b>
      </a>
    </div>

    <div className="insta-img-container">
      <div className="main-img"></div>
      <div className="secondary-imgs">
        <div className="first-img small-imgs"></div>
        <div className="second-img small-imgs"></div>
      </div>
    </div>
  </div>
)

export default Instagram
