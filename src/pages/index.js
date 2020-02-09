import React, { useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [showPostNumber, setShowPostNumber] = useState([0, 6])

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    .slice(showPostNumber[0], showPostNumber[1])

  const decreaseShowPostNumber = () => {
    if (showPostNumber[0] !== 0) {
      let data = [...showPostNumber]
      data[0] = data[0] - 6
      data[1] = data[1] - 6
      setShowPostNumber([...data])
    } else {
      alert('최신페이지 입니다.')
    }
  }

  const increaseShowPostNumber = () => {
    if (showPostNumber[1] < edges.length) {
      let data = [...showPostNumber]
      data[0] = data[0] + 6
      data[1] = data[1] + 6
      setShowPostNumber([...data])
    } else {
      alert('마지막페이지 입니다.')
    }
  }
  
  return (
    <Layout>
      <SEO title="Home" />
      <h4>Blogs</h4>
      <StyledSearch>
        <StyledSearchInput type='text' placeholder='검색어를 입력해주세요' />
        <StyledSearchBtn><FontAwesomeIcon className='search-icon' icon={faSearch} /></StyledSearchBtn>
      </StyledSearch>
      <PostContainer>
        <FontAwesomeIcon
          style={{alignSelf: 'center', cursor: 'pointer'}} 
          icon={faChevronLeft} 
          onClick={decreaseShowPostNumber} 
          size='2x'/>
        <StyledPostList>{Posts}</StyledPostList>
        <FontAwesomeIcon 
          style={{alignSelf: 'center', cursor: 'pointer'}} 
          icon={faChevronRight} 
          onClick={increaseShowPostNumber} 
          size='2x'/>
      </PostContainer>
    </Layout>
  )
}

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledPostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
`

const StyledSearchInput = styled.input`
  outline: none;
  border: 1px solid #0f4c81;
  border-radius: 5px;
  font-size: 14px;
  margin-right: 5px;
  width: 180px;
`

const StyledSearchBtn = styled.button`
  background-color: #fff;
  border-radius: 5px;

  .search-icon {
    color: #0f4c81;
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
            tag
          }
        }
      }
    }
  }
`
