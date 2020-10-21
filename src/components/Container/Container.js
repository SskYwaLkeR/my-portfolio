import React from "react"
import "./static-container.styles.css"
const StaticContainer = ({ title, description }) => (
  <div className="static-container">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
)

export default StaticContainer
