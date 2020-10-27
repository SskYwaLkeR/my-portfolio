import React from "react"
// import { Link } from "gatsby"
import "./project.styles.css"
import Connect from "../Connect/Connect.js"

const ProjectTemplate = ({
  title,
  description,
  url,
  projectStack,
  projGoal,
  techStackDescription,
  challenges,
  lessonsLearned,
  note,
  images: { HeroImg, ImgOne, ImgTwo, ImgThree },
}) => (
  <div className="project-wrapper">
    <div className="project-intro">
      <div className="intro-wrap">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="project-stack">
          <p>
            <a href={url} rel="noopener noreferrer" target="_blank">
              <b>view live {">"}</b>
            </a>
          </p>
          <ul>
            <li>
              <b>Stack</b>
            </li>
            {projectStack.map(data => (
              <li key={data.id}>{data.stack}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="hero-img">{<HeroImg />}</div>

    <div className="project-goal mt-5">
      <h1>Project Goal</h1>
      <p>{projGoal}</p>
    </div>
    <div className="tech-stack-wrapper mt-5">
      <div className="tech-stacks">
        <ul>
          {projectStack.map((data, idx) => (
            <li key={data.key + `${idx}`}>{data.stack}</li>
          ))}
        </ul>
      </div>
      <div className="tech-description">
        <h1>Tech stack and explanation</h1>
        <p>{techStackDescription}</p>
      </div>
    </div>
    <div className="challenges mt-5">
      <h1>Challanges and thought process</h1>
      <p>{challenges}</p>
    </div>

    <div className="images-wrapper mt-5">
      <div className="img-left">
        <div className="image-one">{<ImgOne />}</div>
        <div className="image-two">{<ImgTwo />}</div>
      </div>
      <div className="image-three">{<ImgThree />}</div>
    </div>

    <div className="lessons-learned mt-5">
      <h1>Lessons learned</h1>
      <p>{lessonsLearned}</p>
    </div>
    {note ? (
      <div>
        <blockquote>
          <p>{note}</p>
        </blockquote>
      </div>
    ) : null}
    <Connect />
  </div>
)

export default ProjectTemplate
