/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        marginTop: rhythm(1)
      }}
    >
      <p
        style={{
          fontSize: rhythm(0.467),
        }}
      >
        My name is <strong>{author}</strong>, I'm a software developer based in
        London. you can find me in
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter</a> if you
        want to chat.
      </p>
    </div>
  )
}

export default Bio
