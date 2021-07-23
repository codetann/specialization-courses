import { ApolloServer, gql } from "apollo-server-micro";
import chalk from "chalk";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello: (parent, args, context) => {
      return "Hello Level Up";
    },
  },
};

// const apolloServer = async () => {
//   const server = new ApolloServer({ typeDefs, resolvers });
//   await server.start();
//   return server;
// };

// const startServer = async () => {
//   const server = await apolloServer();
//   server.createHandler({ path: "/api/graphql" });
//   return server;
// };

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};
