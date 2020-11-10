import gql from "graphql-tag";

const BLOG_ARTICLES_QUERY = gql`
query blogArticles{
  blogArticles {
    title
    slug
    category
    articleBase {
      content
      image {
        url
      }
    }
  }
}
`;

export default BLOG_ARTICLES_QUERY;
