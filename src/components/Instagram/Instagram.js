import React from "react"
import InstagramMainImg from "../Optimised-images/instagram/instagram-main.image.js"
import InstagramSecondImg from "../Optimised-images/instagram/instagram-second.image.js"
import InstagramThirdImg from "../Optimised-images/instagram/instagram-third.image.js"
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
      <div className="main-img">
        <InstagramMainImg />
      </div>
      <div className="secondary-imgs">
        <div className="first-img small-imgs">
          <InstagramSecondImg />
        </div>
        <div className="second-img small-imgs">
          <InstagramThirdImg />
        </div>
      </div>
    </div>
  </div>
)

export default Instagram
