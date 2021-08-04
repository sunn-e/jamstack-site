import gql from "graphql-tag";

export const schema = gql`
  type Post {
    title: String!
    body: String!
  }

  type PostPage {
    data: [Post]
  }

  type Query {
    posts: PostPage
  }
`;
