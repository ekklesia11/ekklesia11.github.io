import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge, index) => (
      <PostLink key={edge.node.id} index={index} post={edge.node} />
    ))
    .reverse()

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Blogs</h1>
      <ListBox>
        <TableHead>
          <div>No.</div>
          <div>title</div>
          <div>date</div>
        </TableHead>
        <div>{Posts}</div>
      </ListBox>
    </Layout>
  )
}

const ListBox = styled.div``

const TableHead = styled.div`
  display: flex;

  div:nth-child(1) {
    width: 100px;
    text-align: center;
  }
  div:nth-child(2) {
    width: 300px;
  }
`

export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
