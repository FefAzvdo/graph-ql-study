import { gql } from "apollo-server";

export const userTypeDef = gql`
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
