import React from "react"
import "./static-component.styles.css"

const StaticComponent = ({ title, description }) => (
  <div className="static-container">
    <h1 id={`${title.split(" ").join("-").toLowerCase()}`}>
      <a href={`#${title.split(" ").join("-").toLowerCase()}`}>{title}</a>
    </h1>
    <p>{description}</p>
  </div>
)

export default StaticComponent
