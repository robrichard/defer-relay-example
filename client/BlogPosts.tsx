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
        blogPostsConnection(first: 20)
          @stream_connection(
            key: "BlogPosts_blogPostsConnection"
            initial_count: 0
          ) {
          edges {
            node {
              id
              title
              content
              ...Comments_blogPost @defer
            }
          }
        }
      }
    `,
    queryRef,
  );
  const posts =
    query?.blogPostsConnection?.edges?.map((edge) => edge?.node) || [];
  return (
    <div className="blog">
      <h2>Blog Posts</h2>
      {posts.map((post) => {
        if (!post) return null;
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
