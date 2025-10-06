import {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLObjectType,
} from "graphql";
import {
  GraphQLDeferDirective,
  GraphQLStreamDirective,
  specifiedDirectives,
  printSchema,
} from "graphql";
import {
  connectionFromArray,
  connectionArgs,
  connectionDefinitions,
} from "graphql-relay";

import { writeFileSync } from "fs";
import path from "path";

const blogPosts = [
  {
    id: "1",
    numberOfComments: 12,
    title: "Lorem ipsum dolor sit amet",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    id: "2",
    title: "Et Mollis Torquent Cubilia Sollicitudin",
    numberOfComments: 24,
    content: [
      "Nam curae quis habitant, enim iaculis nulla, faucibus nec aliquam per sagittis cras aptent. In orci congue pulvinar, sed senectus euismod, suspendisse aenean fringilla habitasse nisl erat. Fusce eu accumsan, potenti risus, curae lectus sem ad curabitur dui. Quis fringilla amet, felis etiam, diam himenaeos tortor etiam taciti mollis viverra. Volutpat condimentum etiam fusce, dolor auctor interdum, eros per malesuada aptent euismod curabitur platea aliquam. Id phasellus curabitur commodo, malesuada habitant himenaeos blandit orci.",
      "Nam curae quis habitant, enim iaculis nulla, faucibus nec aliquam per sagittis cras aptent. In orci congue pulvinar, sed senectus euismod, suspendisse aenean fringilla habitasse nisl erat. Fusce eu accumsan, potenti risus, curae lectus sem ad curabitur dui. Quis fringilla amet, felis etiam, diam himenaeos tortor etiam taciti mollis viverra. Volutpat condimentum etiam fusce, dolor auctor interdum, eros per malesuada aptent euismod curabitur platea aliquam. Id phasellus curabitur commodo, malesuada habitant himenaeos blandit orci.",
      "Nam curae quis habitant, enim iaculis nulla, faucibus nec aliquam per sagittis cras aptent. In orci congue pulvinar, sed senectus euismod, suspendisse aenean fringilla habitasse nisl erat. Fusce eu accumsan, potenti risus, curae lectus sem ad curabitur dui. Quis fringilla amet, felis etiam, diam himenaeos tortor etiam taciti mollis viverra. Volutpat condimentum etiam fusce, dolor auctor interdum, eros per malesuada aptent euismod curabitur platea aliquam. Id phasellus curabitur commodo, malesuada habitant himenaeos blandit orci.",
    ],
  },

  {
    id: "3",
    title: "Dapibus Vitae Ligula Nunc Pharetra",
    numberOfComments: 62,
    content: [
      "Condimentum tincidunt nec, torquent ad, lacinia fermentum vehicula sapien rutrum faucibus. Sociosqu facilisis habitant, nec lorem, imperdiet vitae commodo suscipit ultrices. Laoreet torquent, cursus varius mattis. Elementum vehicula blandit, malesuada nostra, eget in a praesent ligula urna. Class urna, nullam tincidunt cubilia pulvinar. Arcu felis aliquam congue, primis tempus est, in dolor litora gravida tortor imperdiet quam. Bibendum tellus nostra, varius eleifend diam id. Conubia lacus sollicitudin, himenaeos semper scelerisque placerat tellus. Non sed faucibus maecenas, facilisis senectus at fames etiam.",
      "Condimentum tincidunt nec, torquent ad, lacinia fermentum vehicula sapien rutrum faucibus. Sociosqu facilisis habitant, nec lorem, imperdiet vitae commodo suscipit ultrices. Laoreet torquent, cursus varius mattis. Elementum vehicula blandit, malesuada nostra, eget in a praesent ligula urna. Class urna, nullam tincidunt cubilia pulvinar. Arcu felis aliquam congue, primis tempus est, in dolor litora gravida tortor imperdiet quam. Bibendum tellus nostra, varius eleifend diam id. Conubia lacus sollicitudin, himenaeos semper scelerisque placerat tellus. Non sed faucibus maecenas, facilisis senectus at fames etiam.",
      "Condimentum tincidunt nec, torquent ad, lacinia fermentum vehicula sapien rutrum faucibus. Sociosqu facilisis habitant, nec lorem, imperdiet vitae commodo suscipit ultrices. Laoreet torquent, cursus varius mattis. Elementum vehicula blandit, malesuada nostra, eget in a praesent ligula urna. Class urna, nullam tincidunt cubilia pulvinar. Arcu felis aliquam congue, primis tempus est, in dolor litora gravida tortor imperdiet quam. Bibendum tellus nostra, varius eleifend diam id. Conubia lacus sollicitudin, himenaeos semper scelerisque placerat tellus. Non sed faucibus maecenas, facilisis senectus at fames etiam.",
    ],
  },
  {
    id: "4",
    title: "Ullamcorper Sociosqu Dictumst Sagittis Etiam",
    numberOfComments: 10,
    content: [
      "Malesuada eget at dolor, risus morbi tellus primis imperdiet. Donec senectus aenean lorem, praesent hac conubia, vestibulum nibh tincidunt euismod arcu convallis. Est nisl dapibus, eget primis, nec consectetur sapien cursus augue aenean fusce. Porta felis curabitur, convallis a, fermentum nam torquent condimentum morbi elementum. Eros praesent phasellus, eleifend urna etiam dictumst torquent.",
      "Malesuada eget at dolor, risus morbi tellus primis imperdiet. Donec senectus aenean lorem, praesent hac conubia, vestibulum nibh tincidunt euismod arcu convallis. Est nisl dapibus, eget primis, nec consectetur sapien cursus augue aenean fusce. Porta felis curabitur, convallis a, fermentum nam torquent condimentum morbi elementum. Eros praesent phasellus, eleifend urna etiam dictumst torquent.",
      "Malesuada eget at dolor, risus morbi tellus primis imperdiet. Donec senectus aenean lorem, praesent hac conubia, vestibulum nibh tincidunt euismod arcu convallis. Est nisl dapibus, eget primis, nec consectetur sapien cursus augue aenean fusce. Porta felis curabitur, convallis a, fermentum nam torquent condimentum morbi elementum. Eros praesent phasellus, eleifend urna etiam dictumst torquent.",
    ],
  },

  {
    id: "5",
    title: "Vestibulum Aliquam In Amet Ut",
    numberOfComments: 74,
    content: [
      "Elit justo metus accumsan, bibendum posuere a, netus gravida auctor ut turpis fames torquent. Fermentum nec aenean pellentesque, malesuada nunc facilisis porttitor aliquam. Facilisis morbi arcu, eu porta habitant aliquam taciti. Ipsum dictumst cursus, lacus viverra curae a. Curabitur condimentum cras, hac odio, malesuada vel egestas ultricies dictum venenatis sem. Nunc blandit cubilia, donec ullamcorper, dui feugiat tincidunt porttitor ut. Viverra fringilla sagittis, curabitur purus, tempor lorem consequat sociosqu magna aliquam. Suspendisse himenaeos pellentesque, per proin, euismod rhoncus curabitur massa odio lorem. Neque vulputate venenatis proin, eu aptent praesent, lectus quisque tempus facilisis rhoncus ut quam turpis.",
      "Elit justo metus accumsan, bibendum posuere a, netus gravida auctor ut turpis fames torquent. Fermentum nec aenean pellentesque, malesuada nunc facilisis porttitor aliquam. Facilisis morbi arcu, eu porta habitant aliquam taciti. Ipsum dictumst cursus, lacus viverra curae a. Curabitur condimentum cras, hac odio, malesuada vel egestas ultricies dictum venenatis sem. Nunc blandit cubilia, donec ullamcorper, dui feugiat tincidunt porttitor ut. Viverra fringilla sagittis, curabitur purus, tempor lorem consequat sociosqu magna aliquam. Suspendisse himenaeos pellentesque, per proin, euismod rhoncus curabitur massa odio lorem. Neque vulputate venenatis proin, eu aptent praesent, lectus quisque tempus facilisis rhoncus ut quam turpis.",
      "Elit justo metus accumsan, bibendum posuere a, netus gravida auctor ut turpis fames torquent. Fermentum nec aenean pellentesque, malesuada nunc facilisis porttitor aliquam. Facilisis morbi arcu, eu porta habitant aliquam taciti. Ipsum dictumst cursus, lacus viverra curae a. Curabitur condimentum cras, hac odio, malesuada vel egestas ultricies dictum venenatis sem. Nunc blandit cubilia, donec ullamcorper, dui feugiat tincidunt porttitor ut. Viverra fringilla sagittis, curabitur purus, tempor lorem consequat sociosqu magna aliquam. Suspendisse himenaeos pellentesque, per proin, euismod rhoncus curabitur massa odio lorem. Neque vulputate venenatis proin, eu aptent praesent, lectus quisque tempus facilisis rhoncus ut quam turpis.",
    ],
  },
];

export function getSchema(): GraphQLSchema {
  const BlogPostType: GraphQLObjectType = new GraphQLObjectType({
    name: "BlogPost",
    fields() {
      return {
        content: {
          name: "content",
          type: new GraphQLList(GraphQLString),
        },
        id: {
          name: "id",
          type: GraphQLString,
        },
        title: {
          type: GraphQLString,
        },
        numberOfComments: {
          type: GraphQLInt,
          resolve: async (post) => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            return post.numberOfComments;
          },
        },
      };
    },
  });

  const { connectionType: blogPostsConnection } = connectionDefinitions({
    nodeType: BlogPostType,
  });
  const QueryType: GraphQLObjectType = new GraphQLObjectType({
    name: "Query",
    fields() {
      return {
        numberOfBlogPosts: {
          type: GraphQLInt,
          resolve: () => blogPosts.length,
        },
        blogPostsConnection: {
          type: blogPostsConnection,
          args: connectionArgs,
          resolve: async function (source, args) {
            const postsConectionResult = connectionFromArray(blogPosts, args);
            console.log("postsConectionResult", postsConectionResult);
            return {
              pageInfo: async () => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                return postsConectionResult.pageInfo;
              },
              edges: async function* () {
                for (const edge of postsConectionResult.edges) {
                  yield edge;
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                }
              },
            };
          },
        },
        blogPosts: {
          name: "blogPosts",
          type: new GraphQLList(new GraphQLNonNull(BlogPostType)),
          resolve: async function* (_source, args) {
            for (const post of blogPosts) {
              yield post;
              await new Promise((resolve) => setTimeout(resolve, 500));
            }
          },
        },
        greeting: {
          name: "greeting",
          type: GraphQLString,
          args: {
            name: {
              type: new GraphQLNonNull(GraphQLString),
            },
          },
          resolve(_source, args) {
            return `Hello ${args.name}!`;
          },
        },
      };
    },
  });
  return new GraphQLSchema({
    directives: [
      GraphQLDeferDirective,
      GraphQLStreamDirective,
      ...specifiedDirectives,
    ],
    query: QueryType,
    types: [BlogPostType, QueryType],
  });
}

writeFileSync(
  path.join(import.meta.dirname, "schema.graphql"),
  printSchema(getSchema()),
);
