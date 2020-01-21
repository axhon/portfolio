import * as React from "react";
import { Link } from "gatsby";
import Wrapper from "../components/Wrapper/Wrapper";
import Nav from "../components/Nav/Nav";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const LandingPage: React.FC<IndexPageProps> = props => {
  return (
    <Wrapper>
      <Nav />
      <h1>Hi people</h1>
      <p>
        Welcome to your new{" "}
        <strong>{props.data.site.siteMetadata.title}</strong> site.
      </p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Wrapper>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default LandingPage;
