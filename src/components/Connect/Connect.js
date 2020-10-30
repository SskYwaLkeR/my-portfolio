import React from "react"
import "./connect.styles.css"
import StaticComponent from "../Container/StaticComponent"
import { LetsTalk } from "../../page-data.js"

const Connect = () => (
  <div className="connect-wrapper">
    <StaticComponent
      title={LetsTalk.title}
      description={LetsTalk.description}
    />

    <div className="connect-email">
      <a href="mailto:hkrai39@gmail.com">
        <b>hkrai39@gmail.com</b>
      </a>
    </div>
  </div>
)

export default Connect
