import { gql } from "apollo-server-express";

export const BaseDef = gql`
  scalar DateTime

  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`