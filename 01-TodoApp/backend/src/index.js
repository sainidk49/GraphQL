import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";
import connectDB from "./db.js";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  await connectDB();

  app.listen(4000, () =>
    console.log(`🚀 Server running at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
