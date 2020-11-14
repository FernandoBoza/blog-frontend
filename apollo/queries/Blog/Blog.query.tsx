import gql from "graphql-tag";

const BLOG_ARTICLE_QUERY = gql`
  query blogArticles($slug: String!, $limit: Int) {
    blogArticles(where: {slug: $slug, limit: $limit}) {
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

export default BLOG_ARTICLE_QUERY;
