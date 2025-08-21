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
  console.log(result);
  res.json(result);
});

app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
