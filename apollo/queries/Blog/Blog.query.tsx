import gql from "graphql-tag";

const BLOG_ARTICLE_QUERY = gql`
  query blogArticles($slug: String!) {
    blogArticles(where: {slug: $slug}) {
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

export default BLOG_ARTICLE_QUERY;
