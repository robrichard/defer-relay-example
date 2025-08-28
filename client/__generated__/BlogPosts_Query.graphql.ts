/**
 * @generated SignedSource<<72afaedb129d27ed549517247b5b2065>>
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
  readonly greeting: string | null | undefined;
  readonly " $fragmentType": "BlogPosts_Query";
};
export type BlogPosts_Query$key = {
  readonly " $data"?: BlogPosts_Query$data;
  readonly " $fragmentSpreads": FragmentRefs<"BlogPosts_Query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "name"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlogPosts_Query",
  "selections": [
    {
      "kind": "Stream",
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Literal",
              "name": "delay",
              "value": 1000
            }
          ],
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
          "storageKey": "blogPosts(delay:1000)"
        }
      ]
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "name",
          "variableName": "name"
        }
      ],
      "kind": "ScalarField",
      "name": "greeting",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "c178a782ed7904e831419bd21c0bd495";

export default node;
