import gql from "graphql-tag";

const PORTFOLIO_ARTICLE_QUERY = gql`
  query portfolioArticles($slug: String!) {
    portfolioArticles(where: {slug: $slug}) {
      title
      slug
      published_at
      articleBase {
        url
        content
        image {
        url 
        }
      }
    }
  }
`;

export default PORTFOLIO_ARTICLE_QUERY;
