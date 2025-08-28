import { createRoot } from "react-dom/client";
import { useLazyLoadQuery } from "react-relay";
import {
  GraphQLResponse,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
  graphql,
} from "relay-runtime";
import { AppQuery } from "./__generated__/AppQuery.graphql.js";
import { RelayEnvironmentProvider } from "react-relay";
import { Environment, Network } from "relay-runtime";
import { Suspense } from "react";
import { fetchGraphQL } from "./fetchGraphQL.js";
import { BlogPosts } from "./BlogPosts.js";

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
  return (
    <div>
      <h1>Welcome to Grats + Relay</h1>
      Server says: "{data.greeting}"
      <div>
        <Suspense fallback={"Loading blog posts..."}>
          <BlogPosts query={data} />
        </Suspense>
      </div>
    </div>
  );
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
