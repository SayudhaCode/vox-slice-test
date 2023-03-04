import * as React from "react"
import { css } from "@emotion/react"

import BtnPrimary from "../button-primary/btn-primary"

import "./hero.scss"

const Hero = ({ bg, title, children }) => {
  return (
    <div
      className="vox-hero"
      css={css`
        background-image: url(${bg});
      `}
    >
      <div className="container">
        <div 
        className="vox-hero__container ps-0 ps-md-5 col-12 col-md-6 d-flex flex-column align-items-start justify-content-center"
        >
          <h1 className="vox__title">{title}</h1>
          {children}
          <BtnPrimary path="#">FIND MORE</BtnPrimary>
        </div>
      </div>
    </div>
  )
}

export default Hero
