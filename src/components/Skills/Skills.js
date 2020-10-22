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
        <li>Javascript</li>
        <li>React.js</li>
        <li>Node.js</li>
      </ul>
      <ul>
        <li>Vue</li>
        <li>SCSS</li>
        <li>Styled Components</li>
      </ul>
      <ul>
        <li>Git</li>

        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  </div>
)

export default Skills
