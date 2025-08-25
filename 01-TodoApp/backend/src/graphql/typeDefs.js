import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Todo {
    id: ID!
    text: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    addTodo(text: String!): Todo!
    toggleTodo(id: ID!): Todo!
    deleteTodo(id: ID!): Boolean!
  }
`;

export default typeDefs;
