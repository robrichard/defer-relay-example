/**
 * @generated SignedSource<<adef245c38e8fae2d1b39a558af36f6c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type App_Query$data = {
  readonly blogPosts: ReadonlyArray<{
    readonly content: string | null | undefined;
    readonly id: string | null | undefined;
    readonly title: string | null | undefined;
  }> | null | undefined;
  readonly " $fragmentType": "App_Query";
};
export type App_Query$key = {
  readonly " $data"?: App_Query$data;
  readonly " $fragmentSpreads": FragmentRefs<"App_Query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_Query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "BlogPost",
      "kind": "LinkedField",
      "name": "blogPosts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "content",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "46f7a940e98f99ee1ceef6daf28690cd";

export default node;
