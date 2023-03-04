import * as React from "react"
import { css } from "@emotion/react"

const About = ({ bg, title, children }) => (
  <div
    className="vox-about container px-3 px-md-0 py-3 py-md-5 mb-5"
    css={css`
      background-image: url(${bg});
    `}
  >
    <div className="px-5 py-5 col-md-6">
      <h1 className="vox__title">{title}</h1>
      {children}
    </div>
  </div>
)

export default About
