/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import quokkaGif from "../images/quokka.gif"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <StyledMain>{children}</StyledMain>
        <footer style={{ textAlign: "center", marginTop: "50px" }}>
          <div style={{ textAlign: "center" }}>
            <img src={quokkaGif} alt="me" />
          </div>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a
            href="https://www.chanhyun.org"
            style={{
              color: "#0f4c81",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            해피쿼카
          </a>
        </footer>
      </div>
    </div>
  )
}

const StyledMain = styled.div``

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
