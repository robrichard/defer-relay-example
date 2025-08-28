/**
 * @generated SignedSource<<cc76ea74ca9dc156f6291914a5aac6d9>>
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
        "kind": "Defer",
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BlogPosts_Query"
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
        "label": "AppQuery$defer$BlogPosts_Query",
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
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "cacheID": "dabe694505a94cd55e5a8723e2331881",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $name: String!\n) {\n  greeting(name: $name)\n  ...BlogPosts_Query @defer(label: \"AppQuery$defer$BlogPosts_Query\")\n}\n\nfragment BlogPosts_Query on Query {\n  blogPosts {\n    id\n    title\n    content\n  }\n  greeting(name: $name)\n}\n"
  }
};
})();

(node as any).hash = "037dfde45548e01840afac74b2e447cc";

export default node;
