# @defer and @stream + Relay Example App

This is an example showing a minimal app using [Relay](https://relay.dev/) with the @defer and @stream directives.

## Getting Started

```sh
pnpm install
pnpm run start
```

## Packages Used

- **Client**
  - [React](https://reactjs.org/) - UI Framework
  - [Relay](https://relay.dev/) - GraphQL Client
- **Server**
  - [graphql-js] - GraphQL Schema
- **Dev Setup**
  - [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
  - [Parcel](https://parceljs.org/) - Bundler for client code
  - [ts-node](https://typestrong.org/ts-node/) - Run TypeScript files directly
  - [Prettier](https://prettier.io/) - Auto-format code
  - [concurrently](https://github.com/open-cli-tools/concurrently) - Run multiple watch commands concurrently

## Translation layer

See fetchGraphQL.ts for an example translation layer that converts the latest incremental delivery GraphQL response format to the Facebook internal format that Relay understands.

This requires setting `deferDeduplicatedFields: true` when creating the Relay Environment to ignore errors thrown from missing fields in deferred responses (https://github.com/facebook/relay/pull/5083). If a field is included in both a deferred and non-deferred fragment, Relay expects the server to return this field twice. The latest spec algorithm ensures the same field is not executed multiple times.

(Please note that `deferDeduplicatedFields` is absent in Relay's TypeScript types, but it still works. See: https://github.com/facebook/relay/pull/5340)
