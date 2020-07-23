import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolver';

const typeDefs = `
  type Note {
    _id: ID!,
    title: String!,
    date: Date,
    body: String!
  }

scalar Date

type Query {
  getNote(_id: ID!): Note
  allNotes: [Note]
}

input NoteInput {
  title: String!
  body: String!
}

type Mutation {
  createNote(input: NoteInput): Note
  updateNote(_id: ID!, input: NoteInput): Note
  deleteNote(_id: ID!): Note
}

`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema;
