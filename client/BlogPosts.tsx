import { graphql, useFragment } from "react-relay";
import { Suspense } from "react";
import { Comments } from "./Comments.js";
import { type BlogPosts_Query$key } from "./__generated__/BlogPosts_Query.graphql.js";
import { ShimmerPost, ShimmerComments } from "./Shimmer.js";

export function BlogPosts({ query: queryRef }: { query: BlogPosts_Query$key }) {
  const query = useFragment(
    graphql`
      fragment BlogPosts_Query on Query {
        numberOfBlogPosts
        blogPosts(delay: 1000) {
          id
          title
          content
          ...Comments_blogPost
        }
      }
    `,
    queryRef,
  );
  const posts = query.blogPosts || [];
  return (
    <div className="blog">
      <h2>Blog Posts</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <span className="comments">
              <Suspense fallback={<ShimmerComments />}>
                <Comments blogPost={post} />
              </Suspense>
            </span>
            <h3>{post.title}</h3>
            {(post.content || []).map((c, i) => (
              <p key={i}>{c}</p>
            ))}
          </div>
        );
      })}
      {posts.length !== query.numberOfBlogPosts && <ShimmerPost />}
    </div>
  );
}
