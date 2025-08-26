import { GraphQLSchema, GraphQLNonNull, GraphQLBoolean, GraphQLString, GraphQLList, GraphQLInt, GraphQLObjectType } from "graphql";
import { GraphQLDeferDirective, GraphQLStreamDirective, specifiedDirectives, printSchema } from "graphql";
import { writeFileSync } from "fs";
import path from "path";

export function getSchema(): GraphQLSchema {
    const BlogPostType: GraphQLObjectType = new GraphQLObjectType({
        name: "BlogPost",
        fields() {
            return {
                content: {
                    name: "content",
                    type: GraphQLString,
                },
                id: {
                    name: "id",
                    type: GraphQLString,
                },
                title: {
                    name: "title",
                    type: GraphQLString,
                }
            };
        }
    });
    const QueryType: GraphQLObjectType = new GraphQLObjectType({
        name: "Query",
        fields() {
            return {
                blogPosts: {
                    name: "blogPosts",
                    type: new GraphQLList(new GraphQLNonNull(BlogPostType)),
                    async resolve() {
                        await new Promise(resolve => setTimeout(resolve, 5000));
                        return [
                            {
                              id: "1",
                              title: "Hello World",
                              content: "This is a test blog post",
                            },
                          ];
                    }
                },
                greeting: {
                    name: "greeting",
                    type: GraphQLString,
                    args: {
                        name: {
                            type: new GraphQLNonNull(GraphQLString)
                        }
                    },
                    resolve(_source, args) {
                        return `Hello ${args.name}!`;
                    }
                }
            };
        }
    });
    return new GraphQLSchema({
        directives: [GraphQLDeferDirective, GraphQLStreamDirective, ...specifiedDirectives],
        query: QueryType,
        types: [BlogPostType, QueryType]
    });
}

writeFileSync(path.join(import.meta.dirname, "schema.graphql"), printSchema(getSchema()));
