import * as React from "react"
import { Component } from "react"
import Slider from "react-slick"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "./slider.scss"

export default class Sliders extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: false,
      centerMode: true,
      centerPadding: "15px",
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div className="slider container pb-5">
        <div className="row">
          <div className="col-md-3 mb-3 mb-md-0">
            <h3 className="h4">SEE WHO</h3>
            <h3>OUR PARTNERS</h3>
            <button className="slider-btn" onClick={this.previous}>
              &lt;
            </button>
            <button className="slider-btn ms-3" onClick={this.next}>
              &gt;
            </button>
            <div className="vox-btn mt-3">
              <Link to="#" className="btn btn-primary">
                SEE OUR PARTNERS{" "}
              </Link>
            </div>
          </div>
          <Slider
            className="col-md-9"
            ref={c => (this.slider = c)}
            {...settings}
          >
            <div className="partner" key={1}>
              <StaticImage
                src="../../images/partner1.png"
                alt="partner"
                layout="fullWidth"
              />
            </div>
            <div className="partner" key={2}>
              <StaticImage
                src="../../images/partner2.png"
                alt="partner"
                layout="fullWidth"
              />
            </div>
            <div className="partner" key={3}>
              <StaticImage
                src="../../images/partner3.png"
                alt="partner"
                layout="fullWidth"
              />
            </div>
            <div className="partner" key={4}>
              <StaticImage
                src="../../images/partner4.png"
                alt="partner"
                layout="fullWidth"
              />
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
