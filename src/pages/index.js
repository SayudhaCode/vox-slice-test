import * as React from "react"

import { Seo } from "../components/seo"
import Hero from "../components/hero/hero"
import Card from "../components/card/card"
import heroImg from "../images/hero.png"
import aboutImg from "../images/about.png"
import About from "../components/about/about"
import Sliders from "../components/slider/slider"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar"

const IndexPage = () => {
  return (
    <div className="vox">
      <Navbar />
      <Hero title="Who are we?" bg={heroImg}>
        <p className="vox__desc">
          Donaki is dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo
        </p>
      </Hero>

      <div className="vox-hero__cards container mt-3 mt-md-0 px-md-0 px-4">
        <div className="row justify-content-between">
          <Card title="BECOME A" textBG="PARTNER" BgColor="#4FC1B7">
            <span>Promote your store through our platform</span>
          </Card>
          <Card title="BECOME A" textBG="MEMBER" BgColor="#656599">
            <span>Browse through a large number of retailers</span>
          </Card>
        </div>
      </div>

      <About title="ABOUT" bg={aboutImg}>
        <p className="vox__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </p>
      </About>

      <Sliders />

      <Footer />
    </div>
  )
}
export default IndexPage

export const Head = () => <Seo />
