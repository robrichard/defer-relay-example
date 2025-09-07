import { graphql, useFragment } from "react-relay";
import { type Comments_blogPost$key } from "./__generated__/Comments_blogPost.graphql.js";

export function Comments({
  blogPost: blogPostRef,
}: {
  blogPost: Comments_blogPost$key;
}) {
  const blogPost = useFragment(
    graphql`
      fragment Comments_blogPost on BlogPost {
        numberOfComments
      }
    `,
    blogPostRef,
  );
  return (
    <div className="comments inline-block">
      {blogPost.numberOfComments === 1 ? (
        <span>1 comment</span>
      ) : (
        <span>{blogPost.numberOfComments} comments</span>
      )}
    </div>
  );
}
