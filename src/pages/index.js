import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/Skills/Skills.js"
import Experience from "../components/Experience/Experience.js"
import Connect from "../components/Connect/Connect.js"
import Projects from "../components/Projects/Projects.js"
import Instagram from "../components/Instagram/Instagram.js"
import AboutMe from "../components/About/AboutMe.js"

import QuotesImage from "../components/Quotes.image.js"
import BlurBottom from "../components/BlurBottom.image.js"

import GithubLogo from "../assets/github.svg"
import InstagramLogo from "../assets/instagram.svg"
import TwitterLogo from "../assets/twitter.svg"

import "../components/index.styles.css"

const IndexPage = () => {
  useEffect(() => {
    const style = [
      `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100' height='100' viewBox='0 0 100 100'%3E%3Cimage id='cute-img' width='100' height='100' xlink:href='data:image/png;base64,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'/%3E%3C/svg%3E%0A")`,
      "background-size: cover",
      "color: #fff",
      "padding: 20px 40px",
      "line-height: 35px",
    ].join(";")
    console.log(
      " Hello There, this website is built with ❤ by Hrishikesh rai %c ",
      style
    )
  })

  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-container">
        <div
          className="top-blur"
          style={{
            width: `180px`,
            top: `0%`,
            right: `0%`,
            position: `absolute`,
            zIndex: `-5`,
          }}
        >
          <BlurBottom />
        </div>
        <div className="intro-wrapper">
          <div className="intro">
            <div
              className="quotes"
              style={{
                width: `500px`,
                position: `absolute`,
                bottom: `-25%`,
                left: `-20%`,
                zIndex: `-1`,
              }}
            >
              <QuotesImage />
            </div>
            <div className="socials">
              <div className="line"></div>

              <div className="social-icons">
                <a
                  href="https://www.instagram.com/hrishi_kesh_rai/"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <InstagramLogo />
                </a>
                <a
                  href="https://twitter.com/Hrishikeshrai2"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <TwitterLogo />
                </a>
                <a
                  href="https://github.com/SskYwaLkeR"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Github"
                >
                  <GithubLogo />
                </a>
              </div>
            </div>
            <h2>Hi, I'm Hrishikesh.</h2>
            <h2>
              Front end <span>developer</span>,
            </h2>
            <h2>CS graduate and javascript enthusiast.</h2>
            <div className="btn-group">
              <a
                href="https://drive.google.com/file/d/1wYtcIlon497reJd1q_S1nvPNFackaaZH/view?usp=sharing"
                className="resume-btn view-resume-btn"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Resume
              </a>
              <a
                href={`../assets/HrishikeshResume.pdf`}
                className="resume-btn download-resume-btn"
                download
              >
                Download Resume
              </a>
            </div>
          </div>

          <div
            className="blur-bottom"
            style={{
              width: `250px`,
              bottom: `3%`,
              left: `-18%`,
              position: `absolute`,

              zIndex: `-2`,
            }}
          >
            <BlurBottom />
          </div>
        </div>
        <AboutMe />

        <Skills />
        <Experience />
        <Projects />

        <Connect />
        <Instagram />
      </div>
    </Layout>
  )
}
export default IndexPage
