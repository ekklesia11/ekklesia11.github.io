import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Intro>
      <div className="circle">
        <div className="img">
          <Image />
        </div>
      </div>
      <div>
        <div>쿼카를 닮은 개발자 (Sorry, quokkas.)</div>
        <div>평화 및 행복주의자</div>
        <div>얜 초식이지만 난 아님</div>
      </div>
    </Intro>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

const Intro = styled.div`
  text-align: center;

  .img {
    max-width: 200px;
    border: 1px solid #fff;
    border-radius: 100%;
  }

  .circle {
    margin-bottom: 1.45rem;
    margin-left: auto;
    margin-right: auto;
    width: 210px;
    height: 210px;
    border: 1px solid #fff;
    border-radius: 100%;
    padding: 5px;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.2);

    &:hover {
      border-color: #b4d7f6;
      cursor: pointer;
    }
  }
`

export default AboutPage
