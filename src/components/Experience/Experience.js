import React from "react"
import { Link } from "gatsby"
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
            <h2>{data.title}</h2>
            <span>{data.role}</span>
            <p>{data.description}</p>
            {data.url.length ? <Link to={data.url}> Read story</Link> : null}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Experience
