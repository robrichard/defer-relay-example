/**
 * @generated SignedSource<<b14d1818b74ef8817b559ed1ceec6981>>
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
};
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
        "if": null,
        "kind": "Stream",
        "label": "BlogPosts_Query$stream$blogPosts",
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
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "09b6611cd10cc7315605a7ad73c88eef",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $name: String!\n) {\n  greeting(name: $name)\n  ...BlogPosts_Query\n}\n\nfragment BlogPosts_Query on Query {\n  numberOfBlogPosts\n  blogPosts @stream(label: \"BlogPosts_Query$stream$blogPosts\", initialCount: 2) {\n    id\n    title\n    content\n    ...Comments_blogPost @defer(label: \"BlogPosts_Query$defer$Comments_blogPost\")\n  }\n}\n\nfragment Comments_blogPost on BlogPost {\n  numberOfComments\n}\n"
  }
};
})();

(node as any).hash = "e9d01df178f43e441560525c4ffa5230";

export default node;
