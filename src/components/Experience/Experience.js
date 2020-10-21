import React from "react"
import "./experience.styles.css"
import { Experience as exp, TimeLine } from "../../page-data.js"
import StaticComponent from "../Container/StaticComponent.js"
const Experience = () => (
  <div className="experience-wrapper">
    <StaticComponent title={exp.title} description={exp.description} />

    <div className="container">
      {TimeLine.map(data => (
        <div className={`timeline-block ${data.class}`} key={data.key}>
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
