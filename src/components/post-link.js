import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const PostLink = ({ index, post }) => (
  <EachPostLink>
    <div>{index + 1}</div>
    <div>
      <Link
        to={post.frontmatter.path}
        style={{ color: "#0f4c81", textDecoration: "none" }}
      >
        {post.frontmatter.title}
      </Link>
    </div>
    <div>{post.frontmatter.date}</div>
  </EachPostLink>
)

const EachPostLink = styled.div`
  display: flex;

  div:nth-child(1) {
    width: 100px;
    text-align: center;
  }
  div:nth-child(2) {
    width: 300px;
  }
`

export default PostLink
