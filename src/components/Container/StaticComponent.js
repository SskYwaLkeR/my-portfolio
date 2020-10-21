import React from "react"
import "./static-component.styles.css"
const StaticComponent = ({ title, description }) => (
  <div className="static-container">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
)

export default StaticComponent
