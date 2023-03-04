import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand col-md-3" href="/">
          <StaticImage src="../images/logo.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse col-md-8 justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/page-2"
                className="nav-link active"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/page-2" className="nav-link">
                LINK &gt;
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/page-2" className="nav-link">
                LINK &gt;
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/page-2" className="nav-link">
                CONTACT US
              </Link>
            </li>
          </ul>
          <div className="d-flex flex-column flex-md-row mt-3 mt-md-0">
            <button className="btn btn-outline-primary me-0 me-md-3 mb-3 mb-md-0">
              LOGIN
            </button>
            <button className="btn btn-primary">REGISTER</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
