import { ExecutionResult } from "graphql";
import {
  validateSchema,
  type GraphQLArgs,
  type GraphQLError,
  parse,
  validate,
  experimentalExecuteIncrementally,
} from "graphql";
export default function graphql(
  args: GraphQLArgs,
): ReturnType<typeof experimentalExecuteIncrementally> {
  const {
    schema,
    source,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    typeResolver,
  } = args;

  // Validate Schema
  const schemaValidationErrors = validateSchema(schema);
  if (schemaValidationErrors.length > 0) {
    return { errors: schemaValidationErrors };
  }

  // Parse
  let document;
  try {
    document = parse(source);
  } catch (syntaxError) {
    return { errors: [syntaxError as GraphQLError] };
  }

  // Validate
  const validationErrors = validate(schema, document);
  if (validationErrors.length > 0) {
    return { errors: validationErrors };
  }

  // Execute
  return experimentalExecuteIncrementally({
    schema,
    document,
    rootValue,
    contextValue,
    variableValues,
    operationName,
    fieldResolver,
    typeResolver,
  });
}
