import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3 mb-3 mb-md-0">
            <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
            <form action="#" method="post">
              <div className="form-group d-flex my-3">
                <input
                  type="email"
                  className="form-control me-3"
                  placeholder="YOUR E-MAIL"
                />
                <button type="submit" className="btn btn-secondary">
                  SUBSCRIBE
                </button>
              </div>
            </form>
            <span>
              Donaki is Luisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam
            </span>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-3">FOLLOW US</h5>
            <ul className="d-flex align-items-start justify-content-around">
              <li>
                <a href="/">
                  <StaticImage
                    src="../../images/pinterest.png"
                    alt="pinterest"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <StaticImage src="../../images/facebook.png" alt="facebook" />
                </a>
              </li>
              <li>
                <a href="/">
                  <StaticImage
                    src="../../images/instagram.png"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <StaticImage src="../../images/blogger.png" alt="blogger" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="mb-3">CONTACT US</h5>
            <div>
              <StaticImage src="../../images/location.png" alt="location" />
              <div className="ms-3 mb-3 d-inline-block">
                <div>Rue de la Loi/Wetstraat</div>
                <div>175 B-1048</div>
                <div>Bruxelles/Brussel</div>
                <div>Belgique/België</div>
              </div>
            </div>
            <div>
              <StaticImage src="../../images/phone.png" alt="phone" />
              <div className="ms-3 d-inline-block">Tel: +32 22252522</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
