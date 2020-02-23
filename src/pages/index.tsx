import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'

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

            <Link to="/page-2/">Go to page 2</Link>
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
