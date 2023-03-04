import * as React from "react"
import { Link } from "gatsby"

const BtnPrimary = ({ path, children }) => (
  <Link to={path} className="vox__btn btn btn-primary">
    {children}
  </Link>
)

export default BtnPrimary
