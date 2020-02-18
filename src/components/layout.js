import React from "react"
import { Link } from "gatsby"
import Toggle from "../components/toggle"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {

  state = {
    theme: null,
  }

  componentDidMount() {
    this.setState({ theme: window.__theme })
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })
    }
  }

  renderHeader() {
    let { location, title } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
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
          <span style={{
            color: "#fe6337",
          }}>_</span>
        </Link>
      </h1>
    )
  }

  render() {
    let { children } = this.props

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {this.renderHeader()}
        {this.state.theme !== null ? (
          <Toggle
            icons={{
              checked: (
                <img
                  src={faMoon}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: "none" }}
                />
              ),
              unchecked: (
                <img
                  src={faSun}
                  width="16"
                  height="16"
                  role="presentation"
                  style={{ pointerEvents: "none" }}
                />
              ),
            }}
            checked={this.state.theme === "dark"}
            onChange={e =>
              window.__setPreferredTheme(
                e.target.checked ? "dark" : "light",
              )
            }
          />
        ) : (
          <div style={{ height: "24px" }}/>
        )}
        <main>{children}</main>
        <footer style={{
          ...scale(-.5),
          textAlign: `center`,
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org" target={`_blank`}>Gatsby.</a>
          {` `}
          using the
          {` `}
          <a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" target={`_blank`}>Starter Blog</a>
        </footer>
      </div>
    )

  }
}

export default Layout