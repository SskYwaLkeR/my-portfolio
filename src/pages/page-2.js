import React from "react"
// import { Link } from "gatsby"
import "../components/projects.styles.css"
import Connect from "../components/Connect/Connect.js"
import Layout from "../components/layout"
import EcommImage from "../components/Ecomm.image.js"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="project-wrapper">
      <div className="project-intro">
        <div className="intro-wrap">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
            dolore omnis minus cum, assumenda quos sapiente debitis, cupiditate
            fugit vero id pariatur accusantium at, molestiae quod accusamus
            voluptates eligendi culpa.
          </p>
          <div className="project-stack">
            <p>
              <b> view live {">"}</b>
            </p>
            <ul>
              <li>
                <b>Stack</b>
              </li>
              <li>React</li>
              <li>SCSS</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <EcommImage />
      </div>

      <div className="project-goal">
        <h1>Project Goal</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis id
          officia facilis veniam asperiores, possimus eveniet reprehenderit ipsa
          beatae voluptates nesciunt necessitatibus sequi reiciendis autem
          excepturi in culpa assumenda? Similique temporibus velit dolorum
          possimus consectetur animi dignissimos cumque ipsam debitis
          consequuntur odit mollitia, sint excepturi rem at dicta minima
          perspiciatis.
        </p>
      </div>
      <div className="tech-stack-wrapper">
        <div className="tech-stacks">
          <ul>
            <li>React</li>
            <li>SCSS</li>
            <li>Heroku</li>
          </ul>
        </div>
        <div className="tech-description">
          <h1>Tech stack and explanation</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            facere doloribus sunt iste, cum magnam illo! Magni, hic amet
            distinctio autem, recusandae reprehenderit tenetur nam eos quo
            voluptates voluptatibus enim fuga voluptas, consequatur alias
            aspernatur? Perferendis, quod pariatur? Labore, nemo!
          </p>
        </div>
      </div>
      <div className="images-wrapper">
        <div className="img-left">
          <div className="image-one">
            <EcommImage />
          </div>
          <div className="image-two">
            <EcommImage />
          </div>
        </div>
        <div className="image-three">
          <EcommImage />
        </div>
      </div>

      <div className="challenges">
        <h1>Challanges and thought process</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          asperiores maiores, numquam eaque ratione nostrum. Amet beatae
          reprehenderit, eaque esse, at odit et, aliquid autem ipsum consectetur
          doloribus quasi culpa minima necessitatibus nobis! Nostrum laboriosam
          at aperiam veniam debitis doloribus.
        </p>
      </div>

      <div className="lessons-learned">
        <h1>Lessons learned</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
          accusamus itaque, repudiandae pariatur rerum nisi. Suscipit quod
          mollitia, aliquam magni sint earum ducimus quam, eveniet veniam
          placeat dolor voluptatibus maxime minus numquam possimus dolore,
          deleniti reprehenderit doloremque rerum. Dolore quia eos aut
          voluptatem! Repudiandae fugiat nemo excepturi repellendus tenetur
          molestiae?
        </p>
      </div>
      <Connect />
    </div>
  </Layout>
)

export default SecondPage
