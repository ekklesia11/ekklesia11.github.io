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
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    .reverse()

  const postShowingLimit = 6

  const pagination = {
    page: Math.ceil(Posts.length / postShowingLimit),
    total: Posts.length,
  }

  const paginate = () => {
    let pages = []
    for (let i = 1; i <= pagination.page; i++) {
      pages.push(i.toString())
    }
    return pages
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h4>Blogs</h4>
      <ListBox>{Posts}</ListBox>
      <div>
        {paginate().map(page => (
          <Page style={{ width: "20px" }}>{page}</Page>
        ))}
      </div>
    </Layout>
  )
}

const ListBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Page = styled.span`
  background-color: #0f4c81;
  color: #fff;
  border-radius: 5px;
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
