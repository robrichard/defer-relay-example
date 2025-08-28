/**
 * @generated SignedSource<<db9af1ab6416926d487d4b1fcf5d2c0b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlogPosts_Query$data = {
  readonly blogPosts: ReadonlyArray<{
    readonly content: string | null | undefined;
    readonly id: string | null | undefined;
    readonly title: string | null | undefined;
  }> | null | undefined;
  readonly " $fragmentType": "BlogPosts_Query";
};
export type BlogPosts_Query$key = {
  readonly " $data"?: BlogPosts_Query$data;
  readonly " $fragmentSpreads": FragmentRefs<"BlogPosts_Query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlogPosts_Query",
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

(node as any).hash = "d47c1ae483bd55c4f0edff11a5d3930b";

export default node;
