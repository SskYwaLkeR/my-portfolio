import React from "react"
import { Link } from "gatsby"
import "./projects.styles.css"
import { Projects as proj, ProjectsData } from "../../page-data.js"
import StaticComponent from "../Container/StaticComponent.js"
const Projects = () => (
  <div className="projects-wrapper">
    <StaticComponent title={proj.title} description={proj.description} />

    {ProjectsData.map(data => (
      <div className="project-display" key={data.key}>
        <Link to={data.url}>
          <div className="proj-img">{<data.img />}</div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </Link>
        <Link to={data.url} className="view-proj">
          View Project {">"}
        </Link>
      </div>
    ))}
  </div>
)

export default Projects
