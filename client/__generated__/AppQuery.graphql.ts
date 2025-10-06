/**
 * @generated SignedSource<<5d318a6efce29374e24b8ba30747ca43>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppQuery$variables = {
  name: string;
};
export type AppQuery$data = {
  readonly greeting: string | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"BlogPosts_Query">;
};
export type AppQuery = {
  response: AppQuery$data;
  variables: AppQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = {
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
},
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": {
      "throwOnFieldError": true
    },
    "name": "AppQuery",
    "selections": [
      (v1/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "BlogPosts_Query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "numberOfBlogPosts",
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "BlogPostConnection",
        "kind": "LinkedField",
        "name": "blogPostsConnection",
        "plural": false,
        "selections": [
          {
            "if": null,
            "kind": "Stream",
            "label": "BlogPosts_Query$stream$BlogPosts_blogPostsConnection",
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
                        "if": null,
                        "kind": "Defer",
                        "label": "BlogPosts_Query$defer$Comments_blogPost",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "numberOfComments",
                            "storageKey": null
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
            "if": null,
            "kind": "Defer",
            "label": "BlogPosts_Query$defer$BlogPosts_blogPostsConnection$pageInfo",
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
        "storageKey": "blogPostsConnection(first:20)"
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "BlogPosts_blogPostsConnection",
        "kind": "LinkedHandle",
        "name": "blogPostsConnection"
      }
    ]
  },
  "params": {
    "cacheID": "f249ebe9339d0398430d18ec24c2fbda",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $name: String!\n) {\n  greeting(name: $name)\n  ...BlogPosts_Query\n}\n\nfragment BlogPosts_Query on Query {\n  numberOfBlogPosts\n  blogPostsConnection(first: 20) {\n    edges @stream(label: \"BlogPosts_Query$stream$BlogPosts_blogPostsConnection\", initialCount: 0) {\n      node {\n        id\n        title\n        content\n        ...Comments_blogPost @defer(label: \"BlogPosts_Query$defer$Comments_blogPost\")\n        __typename\n      }\n      cursor\n    }\n    ... @defer(label: \"BlogPosts_Query$defer$BlogPosts_blogPostsConnection$pageInfo\") {\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment Comments_blogPost on BlogPost {\n  numberOfComments\n}\n"
  }
};
})();

(node as any).hash = "e9d01df178f43e441560525c4ffa5230";

export default node;
