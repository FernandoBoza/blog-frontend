import gql from "graphql-tag";

const PORTFOLIOS_ARTICLES_QUERY = gql`
query portfolioArticles{
  portfolioArticles(sort: "published_at:desc") {
    published_at
    title
    slug
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

export default PORTFOLIOS_ARTICLES_QUERY;
