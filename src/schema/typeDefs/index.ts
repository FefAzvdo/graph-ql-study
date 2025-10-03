import { gql } from "apollo-server";
import { readFileSync } from "fs";
import path from "path";

// lê o schema de user.graphql
// const userSchema = readFileSync(
//   path.join(import.meta.dirname, "user.graphql"),
//   "utf8"
// );

export const typeDefs = gql`
  type Query
  type Mutation

  type User {
    id: ID!
    nome: String!
    email: String!
    idade: Int!
  }

  input CreateUserInput {
    nome: String!
    email: String!
    idade: Int!
  }

  extend type Query {
    getUsers: [User]!
  }

  extend type Mutation {
    createUser(user: CreateUserInput!): User!
    updateUser(user: CreateUserInput!, id: ID!): User!
    deleteUser(id: String): String!
  }
`;
