/**
 * @generated SignedSource<<b7c0457cc4e1cdd820e09e415a49d0ac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BlogPosts_Query$data = {
  readonly blogPostsConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly content: ReadonlyArray<string | null | undefined> | null | undefined;
        readonly id: string | null | undefined;
        readonly title: string | null | undefined;
        readonly " $fragmentSpreads": FragmentRefs<"Comments_blogPost">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
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
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "blogPostsConnection"
        ],
        "stream": true
      }
    ]
  },
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
      "alias": "blogPostsConnection",
      "args": null,
      "concreteType": "BlogPostConnection",
      "kind": "LinkedField",
      "name": "__BlogPosts_blogPostsConnection_connection",
      "plural": false,
      "selections": [
        {
          "kind": "Stream",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "BlogPostEdge",
              "kind": "LinkedField",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "BlogPost",
                  "kind": "LinkedField",
                  "name": "node",
                  "plural": false,
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
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__typename",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "cursor",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ]
        },
        {
          "kind": "Defer",
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "PageInfo",
              "kind": "LinkedField",
              "name": "pageInfo",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "endCursor",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "hasNextPage",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "6578f71e40e4f7a4d287bfd24ea5ca21";

export default node;
