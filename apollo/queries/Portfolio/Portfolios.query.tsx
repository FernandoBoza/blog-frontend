import gql from "graphql-tag";

const PORTFOLIOS_ARTICLES_QUERY = gql`
query portfolioArticles{
  portfolioArticles(sort: "published_at:desc") {
    title
    slug
    published_at
    articleBase {
      content
      image {
        url
      }
    }
  }
}
`;

export default PORTFOLIOS_ARTICLES_QUERY;
