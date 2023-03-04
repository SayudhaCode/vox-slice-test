import * as React from "react"
import { css } from "@emotion/react"

import BtnSecondary from "../button-secondary/btn-secondary"

import "./card.scss"

const Card = ({ title, textBG, BgColor, children }) => (
  <div
    className="vox-hero__card col-md-5 px-5 py-5 mb-5 mb-md-0 text-white"
    css={css`
      background-color: ${BgColor};
    `}
  >
    <h2 className="h3">{title}</h2>
    <div className="text-bg">{textBG}</div>
    {children}
    <div>
      <BtnSecondary path="#">FIND OUT MORE</BtnSecondary>
    </div>
  </div>
)

export default Card
