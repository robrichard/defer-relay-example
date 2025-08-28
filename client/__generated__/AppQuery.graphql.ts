/**
 * @generated SignedSource<<b0622b4c8ae7fe6ac79c7e2e16373b2b>>
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
        "if": null,
        "kind": "Stream",
        "label": "BlogPosts_Query$stream$blogPosts_2F37J5",
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
      }
    ]
  },
  "params": {
    "cacheID": "cc73c67101ada107eb081249c4f657d7",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $name: String!\n) {\n  greeting(name: $name)\n  ...BlogPosts_Query\n}\n\nfragment BlogPosts_Query on Query {\n  blogPosts(delay: 1000) @stream(label: \"BlogPosts_Query$stream$blogPosts_2F37J5\", initialCount: 1) {\n    id\n    title\n    content\n  }\n  greeting(name: $name)\n}\n"
  }
};
})();

(node as any).hash = "e9d01df178f43e441560525c4ffa5230";

export default node;
