import { makeExecutableSchema } from "graphql-tools";
import { Mutation } from "./resolvers/mutation";
import { Query } from "./resolvers/query";

const typeDefs = `
  type Note {
    _id: ID!,
    title: String!,
    organization: String!,
    date: Date,
    body: String!,
    participants: [Person!]
  }

  scalar Date

  type Query {
    getNote(_id: ID!): Note
    allNotes(filter: NotesFilter, orderBy: NoteOrderByInput): [Note]
  }

  type Person {
    key: String
    name: String!
    department: String
  }

  type Mutation {
    createNote(input: NoteInput): Note
    updateNote(_id: ID!, input: NoteInput): Note
    deleteNote(_id: ID!): Note
  }

  input NotesFilter {
    OR: [NotesFilter!]
    title_contains: String
    organization_contains: String
  }

  input NoteOrderByInput {
    date: Sort
  }

  enum Sort {
    asc
    desc
  }

  input PersonInput {
    key: String
    name: String!
    department: String
  }

  input NoteInput {
    participants: [PersonInput]!
    title: String!
    body: String!
    organization: String!
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: { Mutation, Query },
});

export default schema;
