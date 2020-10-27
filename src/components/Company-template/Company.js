import React from "react"
import "./company.styles.css"
import Connect from "../Connect/Connect.js"
import StaticComponent from "../Container/StaticComponent.js"

const Company = ({
  title,
  companyIntro,
  companyIntro2,
  internshipGoal,
  techStack,
  challenges,
  challenges2,
  contribution,
  overview,
}) => (
  <div className="company-wrapper">
    <div className="company-intro">
      <StaticComponent title={title} description={companyIntro} />
      <p>{companyIntro2}</p>
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
          title={`Challenges and growth`}
          description={challenges}
        />
        <p>{challenges2}</p>
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
