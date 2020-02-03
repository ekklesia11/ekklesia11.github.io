import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <StyledNav>
      <Link
        to="/"
        style={{
          color: "#0f4c81",
          textDecoration: "none",
          marginRight: "12px",
        }}
      >
        home
      </Link>
      <Link
        to="/about"
        style={{
          color: "#0f4c81",
          textDecoration: "none",
          marginRight: "12px",
        }}
      >
        about
      </Link>
    </StyledNav>
  )
}

const StyledNav = styled.div`
  margin-bottom: 3rem;
`

export default Nav
