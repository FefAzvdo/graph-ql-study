import { gql } from "apollo-server";
import { readFileSync } from "fs";
import path from "path";

// lê o schema de user.graphql
const userSchema = readFileSync(
  path.join(import.meta.dirname, "user.graphql"),
  "utf8"
);

export const typeDefs = gql`
  type Query
  type Mutation
  ${userSchema}
`;
