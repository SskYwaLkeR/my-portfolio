import React from "react"
import "./connect.styles.css"
import { LetsTalk } from "../../page-data.js"
import StaticComponent from "../Container/StaticComponent"
const Connect = () => (
  <div className="connect-wrapper">
    <StaticComponent
      title={LetsTalk.title}
      description={LetsTalk.description}
    />

    <a href="mailto:hkrai39@gmail.com" className="connect-email">
      <b>hkrai39@gmail.com</b>
    </a>
  </div>
)

export default Connect
