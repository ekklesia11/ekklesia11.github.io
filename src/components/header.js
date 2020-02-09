import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from './nav'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#0f4c81`,
      marginBottom: `1.45rem`,
    }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: 960
      }}
      >
      <h4 style={{ margin: 0, padding: `1.45rem 1.0875rem`, }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          >
            {siteTitle}
        </Link>
      </h4>
      <Nav/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
