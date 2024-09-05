import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = `
  type User {
    id: ID!
    coins: Int!
  }

  type Query {
    getUser(id: ID!): User
  }

  type Mutation {
    addCoins(id: ID!, amount: Int!): User
  }
`;

export const schema = makeExecutableSchema({ typeDefs });
