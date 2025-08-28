import { graphql, useFragment } from "react-relay";
import { type BlogPosts_Query$key } from "./__generated__/BlogPosts_Query.graphql.js";

export function BlogPosts({ query: queryRef }: { query: BlogPosts_Query$key }) {
  const query = useFragment(
    graphql`
      fragment BlogPosts_Query on Query {
        blogPosts(delay: 1000) @stream(initialCount: 1) {
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
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}
