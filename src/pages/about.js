import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackToList from "../components/back-to-list"

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
        <div>개발자 해피쿼카</div>
        <div>평화 및 행복주의자</div>
      </div>
    </Intro>
    <BackToList />
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
