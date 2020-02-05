import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BackToList = () => {
  return (
    <StyledBackToList>
      <Link to="/" style={{ color: "#0f4c81", textDecoration: "none" }}>
        Back to list
      </Link>
    </StyledBackToList>
  )
}

const StyledBackToList = styled.div``

export default BackToList
