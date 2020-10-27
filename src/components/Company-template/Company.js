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
      <StaticComponent
        title={`Title`}
        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
         necessitatibus laborum minima vitae quas. Soluta voluptates, possimus
         aperiam in eum tempora enim non saepe quas quia sit deleniti quibusdam
         ullam.`}
      />
    </div>
    <div className="goal-internship">
      <StaticComponent
        title={`Goal of internship`}
        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
         necessitatibus laborum minima vitae quas. Soluta voluptates, possimus
         aperiam in eum tempora enim non saepe quas quia sit deleniti quibusdam
         ullam.`}
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
          title={`Personal challenges`}
          description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
         necessitatibus laborum minima vitae quas. Soluta voluptates, possimus
         aperiam in eum tempora enim non saepe quas quia sit deleniti quibusdam
         ullam.`}
        />
      </div>
    </div>
    <div className="my-contribution">
      <StaticComponent
        title={`My contribution`}
        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
         necessitatibus laborum minima vitae quas. Soluta voluptates, possimus
         aperiam in eum tempora enim non saepe quas quia sit deleniti quibusdam
         ullam.`}
      />
    </div>
    <div className="overview">
      <StaticComponent
        title={`Overview`}
        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
         necessitatibus laborum minima vitae quas. Soluta voluptates, possimus
         aperiam in eum tempora enim non saepe quas quia sit deleniti quibusdam
         ullam.`}
      />
    </div>

    <Connect />
  </div>
)

export default Company
