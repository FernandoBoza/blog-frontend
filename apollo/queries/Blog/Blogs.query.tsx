import gql from "graphql-tag";

// EXAMPLE
// users (
//  limit: 10,
//  start: 10,
//  sort: "username:asc",
//  where: { email_contains: "@strapi.io" }
//  ) {

const BLOGS_ARTICLES_QUERY = gql`
query blogArticles {
  blogArticles(sort: "published_at:desc") {
    id
    published_at
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

export default BLOGS_ARTICLES_QUERY;
