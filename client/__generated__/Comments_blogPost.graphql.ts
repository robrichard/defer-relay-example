/**
 * @generated SignedSource<<21bdbe14619c3e7a0c363e36826e9b68>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Comments_blogPost$data = {
  readonly numberOfComments: number | null | undefined;
  readonly " $fragmentType": "Comments_blogPost";
};
export type Comments_blogPost$key = {
  readonly " $data"?: Comments_blogPost$data;
  readonly " $fragmentSpreads": FragmentRefs<"Comments_blogPost">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Comments_blogPost",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "numberOfComments",
      "storageKey": null
    }
  ],
  "type": "BlogPost",
  "abstractKey": null
};

(node as any).hash = "e752604b2dbf7359a582a7786acaa94d";

export default node;
