import { createRoot } from "react-dom/client";
import { useLazyLoadQuery } from "react-relay";
import { RecordSource, Store, graphql } from "relay-runtime";
import { type AppQuery } from "./__generated__/AppQuery.graphql.js";
import { RelayEnvironmentProvider } from "react-relay";
import { Environment, Network } from "relay-runtime";
import { Suspense } from "react";
import { fetchGraphQL } from "./fetchGraphQL.js";
import { BlogPosts } from "./BlogPosts.js";
import { Shimmer } from "./Shimmer.js";

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery($name: String!) @throwOnFieldError {
        greeting(name: $name)
        ...BlogPosts_Query
      }
    `,
    { name: "Grats and Relay" },
  );
  return <BlogPosts query={data} />;
}

const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(RecordSource.create()),
  // @ts-expect-error Type definition is missing, but exists in actual implementation.
  // See: https://github.com/facebook/relay/pull/5340
  deferDeduplicatedFields: true,
});

createRoot(document.getElementById("app")!).render(
  <RelayEnvironmentProvider environment={environment}>
    <div className="app">
      <h1>Relay Example with @defer and @stream</h1>
      <Suspense fallback={<Shimmer />}>
        <App />
      </Suspense>
    </div>
  </RelayEnvironmentProvider>,
);
