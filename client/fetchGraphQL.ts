import fetchMultipart from "fetch-multipart-graphql";
import {
  Observable,
  type RequestParameters,
  type Variables,
} from "relay-runtime";
import { type Sink } from "relay-runtime/lib/network/RelayObservable.js";
import {
  type InitialIncrementalExecutionResult,
  type SubsequentIncrementalExecutionResult,
} from "graphql";

function isInitialIncrementalExecutionResult(
  result:
    | InitialIncrementalExecutionResult
    | SubsequentIncrementalExecutionResult,
): result is InitialIncrementalExecutionResult {
  return "data" in result || "errors" in result;
}

class RelayIncrementalDeliveryTransformer {
  private pendingParts: Map<string, any>;
  private dataTree: any;
  constructor(private readonly next: (arg: any) => void) {
    this.next = next;
    this.pendingParts = new Map<string, any>();
    this.dataTree = {};
  }
  onNext(
    parts: Array<
      InitialIncrementalExecutionResult | SubsequentIncrementalExecutionResult
    >,
  ) {
    for (const result of parts) {
      if (isInitialIncrementalExecutionResult(result)) {
        this.dataTree = result.data;
        this.next({
          data: result.data,
          errors: result.errors,
          extensions: {
            ...result.extensions,
            is_final: !result.hasNext,
          },
        });
      }
      for (const pending of result.pending || []) {
        this.pendingParts.set(pending.id, {
          id: pending.id,
          path: pending.path,
          label: pending.label,
          data: {},
        });
      }
      if (!isInitialIncrementalExecutionResult(result)) {
        for (const incremental of result.incremental || []) {
          const pendingPart = this.pendingParts.get(incremental.id);
          if (pendingPart) {
            if ("data" in incremental) {
              let dataTreeObject = this.dataTree;
              let object = pendingPart.data;
              for (const pathSegment of pendingPart.path) {
                dataTreeObject = dataTreeObject[pathSegment];
              }
              if (incremental.subPath) {
                for (const pathSegment of incremental.subPath) {
                  dataTreeObject = dataTreeObject[pathSegment];
                  object = object[pathSegment];
                }
              }
              Object.assign(object, incremental.data);
              Object.assign(dataTreeObject, incremental.data);
            } else if ("items" in incremental) {
              let dataTreeList = this.dataTree;
              for (const pathSegment of pendingPart.path) {
                dataTreeList = dataTreeList[pathSegment];
              }
              if (!Array.isArray(dataTreeList)) {
                throw new Error("Expected a list");
              }
              let currentIndex = dataTreeList.length;
              for (const item of (incremental.items as Array<any>) || []) {
                dataTreeList.push(item);
                this.next({
                  data: item,
                  path: [...pendingPart.path, currentIndex],
                  label: pendingPart.label,
                  extensions: {
                    ...result.extensions,
                    is_final: !result.hasNext,
                  },
                });
                currentIndex++;
              }
            }
          }
        }
        for (const completed of result.completed || []) {
          const pendingPart = this.pendingParts.get(completed.id);
          if (pendingPart) {
            this.next({
              data: pendingPart.data,
              path: pendingPart.path,
              label: pendingPart.label,
              extensions: {
                ...result.extensions,
                is_final: !result.hasNext,
              },
            });
          }
        }
      }
    }
  }
}

export function fetchGraphQL(request: RequestParameters, variables: Variables) {
  return Observable.create((sink) => {
    const transformer = new RelayIncrementalDeliveryTransformer((...args) => {
      console.log("args", ...args);
      sink.next(...args);
    });
    fetchMultipart("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: request.text,
        variables,
      }),
      credentials: "same-origin",
      onNext: (parts) => {
        transformer.onNext(parts);
      },
      onError: (err) => sink.error(err),
      onComplete: () => sink.complete(),
    });
  });
}
