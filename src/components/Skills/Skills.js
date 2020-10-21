import React from "react"
import "./skills.styles.css"
import { MySkills } from "../../page-data.js"
import StaticComponent from "../Container/StaticComponent.js"
const Skills = () => (
  <div className="skills-wrapper">
    <StaticComponent
      title={MySkills.title}
      description={MySkills.description}
    />
    <div className="skill-set-wrapper">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>
    </div>
  </div>
)

export default Skills
