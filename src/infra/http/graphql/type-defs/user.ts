import { gql } from "apollo-server-express";

export const UserDef = gql`
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

  input AuthenticateUserInput {
    email: String!
    password: String!
  }

  type RegisterOrAuthenticateUserPayload {
    user: User!
    token: String!
  }

  extend type Query {
    findUserById(userId: String!): User!
    authenticateUser(data: AuthenticateUserInput): RegisterOrAuthenticateUserPayload
    listAllUsers: [User]
  }

  extend type Mutation {
    registerUser(data: RegisterUserInput): RegisterOrAuthenticateUserPayload
  }
`