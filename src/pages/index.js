import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About/About.js"
import Skills from "../components/Skills/Skills.js"
import Experience from "../components/Experience/Experience.js"
import Connect from "../components/Connect/Connect.js"
import Projects from "../components/Projects/Projects.js"

import QuotesImage from "../components/Quotes.image.js"
import BlurImage from "../components/BlurTop.image.js"

import GithubLogo from "../assets/github.svg"
import InstagramLogo from "../assets/instagram.svg"
import TwitterLogo from "../assets/twitter.svg"

import "../components/index.styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home-container">
      <div
        className="top-blur"
        style={{
          width: `190px`,
          top: `0%`,
          right: `-5%`,
          position: `absolute`,
        }}
      >
        <BlurImage />
      </div>
      <div className="intro-wrapper">
        <div className="intro">
          <div
            className="quotes"
            style={{
              width: `400px`,
              top: `-180%`,
              left: `-18%`,
              position: `absolute`,
            }}
          >
            <QuotesImage />
          </div>
          <div className="socials">
            <div className="line"></div>

            <div className="social-icons">
              <GithubLogo />
              <InstagramLogo />
              <TwitterLogo />
            </div>
          </div>
          <h2>Hi, I'm Hrishikesh.</h2>
          <h2>Front end developer,</h2>
          <h2>CS graduate and javascript enthusiast.</h2>
          <div className="btn-group">
            <button className="resume-btn view-resume-btn">View Resume</button>
            <button className="resume-btn download-resume-btn">
              Download Resume
            </button>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Experience />
      <Projects />

      <Connect />
    </div>
  </Layout>
)

export default IndexPage
