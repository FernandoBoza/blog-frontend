import gql from "graphql-tag";

const BLOGS_ARTICLES_QUERY = gql`
query blogArticles {
  blogArticles(sort: "published_at:desc") {
    published_at
    title
    slug
    category
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

export default BLOGS_ARTICLES_QUERY;
