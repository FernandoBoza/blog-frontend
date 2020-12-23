import gql from "graphql-tag";

const SINGLE_QUERY = category => {
  return gql`
    query Articles($slug: String!) {
      ${category}Articles(where: {slug: $slug}) {
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
}

export default SINGLE_QUERY;
