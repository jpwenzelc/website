import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ title, children }) => {
  let header

  header = (
    <h1
      style={{
        ...scale(1.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer
        style={{
          ...scale(-0.5),
          textAlign: `center`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target={`_blank`}>
          Gatsby.
        </a>
        {` `}
        using the
        {` `}
        <a
          href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/"
          target={`_blank`}
        >
          Starter Blog
        </a>
      </footer>
    </div>
  )
}

export default Layout
