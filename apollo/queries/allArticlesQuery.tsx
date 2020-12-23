import gql from "graphql-tag";

const ARTICLES_QUERY = (category) => {
  return gql`
    query Articles {
      ${category}Articles(sort: "published_at:desc") {
        published_at
        title
        slug
        articleBase {
          favorite
          url
          content
          image {
            url
          }
        }
      }
    }
  `;
}

export default ARTICLES_QUERY;
