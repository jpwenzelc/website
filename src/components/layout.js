import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

const Header = styled(
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

const Container = styled(<div
  style={{
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  }}
/>)

const Layout = ({ children }) => {

  return (
    <Container>
      <Header/>
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
    </Container>
  )
}

export default Layout
