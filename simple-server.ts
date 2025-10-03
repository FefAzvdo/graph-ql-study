import { ApolloServer } from "apollo-server";
import { typeDefs } from "./src/schema/typeDefs/index.js";
import { resolvers } from "./src/schema/resolvers/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 4000;

server.listen({ port: PORT, cors: { origin: "*" } }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
