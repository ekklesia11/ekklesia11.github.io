import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const PostLink = ({ post }) => {
  console.log(post.frontmatter.date)
  return (
    <Card>
      <Link to={post.frontmatter.path} style={{ textDecoration: "none" }}>
        <CardHeader>
          <div className="date">{post.frontmatter.date.split(', ')[0]}</div>
          <div className="title">{post.frontmatter.title}</div>
          <div className="tag">{post.frontmatter.tag}</div>
        </CardHeader>
        <CardBody>
          <div style={{ height: "160px", overflow: "hidden" }}>
            {post.excerpt}
          </div>
        </CardBody>
      </Link>
    </Card>
  )
}

const Card = styled.div`
  width: 250px;
  box-shadow: 1px 1px 4px 0 rgba(75, 101, 132, 0.1);
  position: relative;
  border-radius: 20px;
  transition: all 0.2s 0.1s;
  margin: 20px;

  &:hover {
    box-shadow: 1px 3px 8px 0 rgba(75, 101, 132, 0.2);
  }
`
const CardHeader = styled.div`
  position: relative;
  width: 100%
  height: 25%;
  border: 2px solid #0f4c81;
  border-radius: 20px 20px 0 0;
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
  
  .tag {
    font-size: 12px;
    color: #778ca3;
  }
`

const CardBody = styled.div`
  position: releative;
  width: 100%;
  border-color: #0f4c81;
  border-style: solid;
  border-width: 0 2px 2px;
  border-radius: 0 0 20px 20px;
  padding: 20px;
  color: #4b6584;
`

export default PostLink
