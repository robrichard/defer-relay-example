import { createRoot } from "react-dom/client";
import { useLazyLoadQuery, useFragment } from "react-relay";
import {
  GraphQLResponse,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
  graphql,
} from "relay-runtime";
import { AppQuery } from "./__generated__/AppQuery.graphql.js";
import { type App_Query$key } from "./__generated__/App_Query.graphql.js";
import { RelayEnvironmentProvider } from "react-relay";
import { Environment, Network } from "relay-runtime";
import { Suspense } from "react";

function BlogPosts({ query: queryRef }: { query: App_Query$key }) {
  const query = useFragment(
    graphql`
      fragment App_Query on Query {
        blogPosts {
          id
          title
          content
        }
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

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery($name: String!) @throwOnFieldError {
        greeting(name: $name)
        ...App_Query @defer
      }
    `,
    { name: "Grats and Relay" },
  );
  return (
    <div>
      <h1>Welcome to Grats + Relay</h1>
      Server says: "{data.greeting}"
      <BlogPosts query={data} />
    </div>
  );
}

async function fetchGraphQL(
  request: RequestParameters,
  variables: Variables,
): Promise<GraphQLResponse> {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: request.text, variables: variables }),
  });
  return await response.json();
}

const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(RecordSource.create()),
});

createRoot(document.getElementById("app")!).render(
  <RelayEnvironmentProvider environment={environment}>
    <Suspense fallback={"Loading..."}>
      <App />
    </Suspense>
  </RelayEnvironmentProvider>,
);
