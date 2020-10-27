import React from "react"
import "./company.styles.css"
import Connect from "../Connect/Connect.js"
import StaticComponent from "../Container/StaticComponent.js"

const Company = ({
  title,
  companyIntro,
  internshipGoal,
  techStack,
  challenges,
  contribution,
  overview,
}) => (
  <div className="company-wrapper">
    <div className="company-intro">
      <StaticComponent title={title} description={companyIntro} />
    </div>
    <div className="goal-internship">
      <StaticComponent
        title={`Goal of internship`}
        description={internshipGoal}
      />
    </div>
    <div className="company-stack-container">
      <ul className="tech-stacky">
        <li>React</li>
        <li>Material UI</li>
        <li>ANT design</li>
      </ul>

      <div className="personal-challenges">
        <StaticComponent
          title={`Challeneges and growth`}
          description={challenges}
        />
      </div>
    </div>
    <div className="my-contribution">
      <StaticComponent title={`My contribution`} description={contribution} />
    </div>
    <div className="overview">
      <StaticComponent title={`Overview`} description={overview} />
    </div>

    <Connect />
  </div>
)

export default Company
