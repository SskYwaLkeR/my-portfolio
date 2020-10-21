import React from "react"
import "./experience.styles.css"
import { Experience as exp, TimeLine } from "../../page-data.js"
const Experience = () => (
  <div className="experience-wrapper">
    <h1>{exp.title}</h1>
    <p>{exp.description}</p>

    <div className="container">
      {TimeLine.map(data => (
        <div className={`timeline-block ${data.class}`}>
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>{data.title}</h3>
            <span>{data.role}</span>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Experience
