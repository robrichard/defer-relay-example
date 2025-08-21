/**
 * @generated SignedSource<<7b981edabcf77974779aae3a7002763a>>
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
  readonly " $fragmentSpreads": FragmentRefs<"App_Query">;
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
        "kind": "Defer",
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "App_Query"
          }
        ]
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
        "kind": "Defer",
        "label": "AppQuery$defer$App_Query",
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
        ]
      }
    ]
  },
  "params": {
    "cacheID": "4638034e4b47666856ac5c76e7e098f7",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $name: String!\n) {\n  greeting(name: $name)\n  ...App_Query @defer(label: \"AppQuery$defer$App_Query\")\n}\n\nfragment App_Query on Query {\n  blogPosts {\n    id\n    title\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "aeebb5dd63a84b366067167b947c5ed6";

export default node;
