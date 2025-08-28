import { graphql, useFragment } from "react-relay";
import { type BlogPosts_Query$key } from "./__generated__/BlogPosts_Query.graphql.js";

export function BlogPosts({ query: queryRef }: { query: BlogPosts_Query$key }) {
  const query = useFragment(
    graphql`
      fragment BlogPosts_Query on Query {
        blogPosts {
          id
          title
          content
        }
        greeting(name: $name)
      }
    `,
    queryRef,
  );
  const posts = query.blogPosts || [];
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
