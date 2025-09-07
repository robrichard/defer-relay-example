/**
 * @generated SignedSource<<181df2822a90e1ef73958cce31c3a0d4>>
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "numberOfComments",
            "storageKey": null
          }
        ],
        "storageKey": "blogPosts(delay:1000)"
      }
    ]
  },
  "params": {
    "cacheID": "105d5ac392f286db515dc89c2f4d6d1f",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $name: String!\n) {\n  greeting(name: $name)\n  ...BlogPosts_Query\n}\n\nfragment BlogPosts_Query on Query {\n  numberOfBlogPosts\n  blogPosts(delay: 1000) {\n    id\n    title\n    content\n    ...Comments_blogPost\n  }\n}\n\nfragment Comments_blogPost on BlogPost {\n  numberOfComments\n}\n"
  }
};
})();

(node as any).hash = "e9d01df178f43e441560525c4ffa5230";

export default node;
