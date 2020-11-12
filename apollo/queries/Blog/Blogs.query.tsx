import gql from "graphql-tag";

const BLOGS_ARTICLES_QUERY = gql`
query blogArticles{
  blogArticles {
    title
    slug
    category
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

export default BLOGS_ARTICLES_QUERY;
