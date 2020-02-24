import * as React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Portfolio from '../components/Portfolio'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string
            }
        }
    }
}

const LandingPage: React.FC<IndexPageProps> = props => {
    return (
        <>
            <Hero />

            <AboutMe />

            <Portfolio />
        </>
    )
}

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default LandingPage
