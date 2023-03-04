import * as React from "react"
import { Link } from "gatsby"

import './btn-secondary.scss'

const BtnSecondary = ({ path, children }) => (
  <Link to={path} className="vox__btn btn btn-outline-secondary mt-3">
    {children}
  </Link>
)

export default BtnSecondary

