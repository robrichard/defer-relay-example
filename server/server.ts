import { createRequire } from "node:module";
import { getSchema } from "./schema.js";
import graphql from "./executeGraphql.js";
const require = createRequire(import.meta.url);
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

function writePartialResult(res: any, result: any) {
  const json = JSON.stringify(result);
  const chunk = Buffer.from(json, "utf8");
  const data = ["Content-Type: application/json; charset=utf-8", "", chunk];
  if (result.hasNext === true) {
    data.push("---\r\n");
  } else {
    data.push("-----\r\n");
  }
  res.write(data.join("\r\n"));
}

app.post("/graphql", async (req: any, res: any) => {
  const query = req.body.query;
  const variables = req.body.variables;
  const operationName = req.body.operationName;
  const context = {};
  const rootValue = {};
  const result = await graphql({
    schema: getSchema(),
    source: query,
    variableValues: variables,
    operationName,
    contextValue: context,
    rootValue,
  });
  if ("initialResult" in result) {
    res.setHeader("Content-Type", 'multipart/mixed; boundary="-"');
    res.write("\r\n---\r\n");
    writePartialResult(res, result.initialResult);

    for await (const subsequentResult of result.subsequentResults) {
      writePartialResult(res, subsequentResult);
    }
    res.end();
  } else {
    res.json(result);
  }
});

app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
