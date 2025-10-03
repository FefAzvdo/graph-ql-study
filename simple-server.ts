import { ApolloServer } from "apollo-server";
import { typeDefs } from "./src/schema/typeDefs/index.ts";
import { resolvers } from "./src/schema/resolvers/index.ts";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 4000, cors: { origin: "*" } }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
