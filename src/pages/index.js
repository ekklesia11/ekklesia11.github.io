import React, { useState } from "react"
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
  const [active, setActive] = useState("1")

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
      pages.push(
        <Page
          id={i}
          style={{
            width: "30px",
            height: "40px",
            backgroundColor: `${i === active ? "#0f4c81" : "#fff"}`,
            color: `${i === active ? "#fff" : "#000"}`,
          }}
          onClick={activatePage}
        >
          {i.toString()}
        </Page>
      )
    }
    return pages
  }

  const activatePage = e => {
    setActive(e.target.id)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h4>Blogs</h4>
      <ListBox>{Posts}</ListBox>
      <Pagination>{paginate()}</Pagination>
    </Layout>
  )
}

const ListBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Page = styled.div`
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
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
