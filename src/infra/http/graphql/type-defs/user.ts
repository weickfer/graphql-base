import { gql } from "apollo-server-express";

export const UserDef = gql`
  # extend type Query {

  # }

  type User {
    id: String!
    name: String!
    email: String!
    created_at: DateTime!
  }

  input RegisterUserInput {
    name: String!
    email: String!
    password: String!
  }

  extend type Mutation {
    registerUser(data: RegisterUserInput): User
  }
`