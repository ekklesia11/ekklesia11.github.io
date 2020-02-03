import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const PostLink = ({ post }) => {
  console.log(post)
  return (
    <Card>
      <Link to={post.frontmatter.path} style={{ textDecoration: "none" }}>
        <CardHeader>
          <div className="date">{post.frontmatter.date}</div>
          <div className="title">{post.frontmatter.title}</div>
        </CardHeader>
        <CardBody>
          <div>{post.excerpt}</div>
        </CardBody>
      </Link>
    </Card>
  )
}

const Card = styled.div`
  width: 250px;
  height: 300px;
  box-shadow: 1px 1px 4px 0 rgba(75, 101, 132, 0.1);
  position: relative;
  border-radius: 20px;
  transition: all 0.3s 0.1s;
  margin: 20px;

  &:hover {
    box-shadow: 2px 2px 4px 0 rgba(75, 101, 132, 0.2);
    transform: translate(-1.5px, -1.5px);
    transition: all 0.3s 0.1s;
  }
`
const CardHeader = styled.div`
  position: relative;
  width: 100%
  height: 400px;
  border-radius: 20px 20px 0 0;
  background-color: #d1d8e0;
  padding: 10px 15px;

  .date {
    font-size: 16px;
    margin-bottom: 10px;
    color: #778ca3;
  }
  
  .title {
    font-size: 24px;
    color: #0f4c81;
  }
`

const CardBody = styled.div`
  position: releative;
  width: 100%;
  height: 218px;
  border-radius: 0 0 20px 20px;
  padding: 20px 15px;
  color: #4b6584;
`

export default PostLink
