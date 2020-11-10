import gql from "graphql-tag";

const PORTFOLIO_ARTICLES_QUERY = gql`
query portfolioArticles{
  portfolioArticles {
    title
    slug
    articleBase {
      content
      image {
        url
      }
    }
  }
}
`;

export default PORTFOLIO_ARTICLES_QUERY;
