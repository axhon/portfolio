import * as React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import favicon from '../assets/favicon_io/favicon.ico'
import favicon16x16 from '../assets/favicon_io/favicon-16x16.png'
import favicon32x32 from '../assets/favicon_io/favicon-32x32.png'
import appleTouchIcon from '../assets/favicon_io/apple-touch-icon.png'

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

const LandingPage = (props: IndexPageProps) => {
    return (
        <>
            <Helmet>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={appleTouchIcon}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={favicon32x32}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={favicon16x16}
                />

                <link rel="shortcut icon" type="image/png" href={favicon} />

                <title>{props.data.site.siteMetadata.title}</title>
            </Helmet>
            <Hero />

            <AboutMe />

            <Portfolio />

            <Footer />
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
