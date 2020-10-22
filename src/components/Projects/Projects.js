import React from "react"
import "./projects.styles.css"
import { Projects as proj, ProjectsData } from "../../page-data.js"
import StaticComponent from "../Container/StaticComponent.js"
const Projects = () => (
  <div className="projects-wrapper">
    <StaticComponent title={proj.title} description={proj.description} />

    {ProjectsData.map(data => (
      <div className="project-display" key={data.key}>
        <div className="proj-img">{<data.img />}</div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>View Project {">"} </p>
      </div>
    ))}
  </div>
)

export default Projects
