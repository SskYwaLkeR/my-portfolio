import React from "react"
import { AboutMe as data } from "../../page-data.js"
import "./about.styles.css"
import StaticComponent from "../Container/StaticComponent"
const AboutMe = () => (
  <div className="about-wrapper">
    <StaticComponent title={data.title} description={data.description} />

    <p>{data.description2}</p>
    <p>{data.description3}</p>
  </div>
)

export default AboutMe
