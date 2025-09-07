/**
 * @generated SignedSource<<008ea233f059a4f76cb7873f5607dfee>>
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
    readonly content: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly id: string | null | undefined;
    readonly title: string | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"Comments_blogPost">;
  }> | null | undefined;
  readonly numberOfBlogPosts: number | null | undefined;
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
      "kind": "ScalarField",
      "name": "numberOfBlogPosts",
      "storageKey": null
    },
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
            },
            {
              "kind": "Defer",
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Comments_blogPost"
                }
              ]
            }
          ],
          "storageKey": "blogPosts(delay:1000)"
        }
      ]
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "f90866a9b75ccf4fc96e56c5b0f66acc";

export default node;
