import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"

const Nav = () => {
  return (
    <StyledNav>
      <StyledLink
        to="/"
      >
        Blogs
      </StyledLink>
      <StyledLink
        to="/about"
      >
        About
      </StyledLink>
        <StyledSNS icon={faGithub} />
        <StyledSNS icon={faTwitter} />
        <StyledSNS icon={faInstagram} />
        <StyledSNS icon={faFacebook} />
    </StyledNav>
  )
}

const StyledNav = styled.div`
  display: flex;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 12px;
`

const StyledSNS = styled(FontAwesomeIcon)`
  color: #fff;
  margin-right: 12px;
  cursor: pointer;
`

export default Nav
