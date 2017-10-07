import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    scalar JSON

    schema {
        query: Query
        mutation: Mutation
    }
    
    type User {
        id: ID!
        email: String!
        firstName: String!
        lastName: String!
        createAt: String!
        updatedAt: String!
        deletedAt: String
    }

    type Query {
        getUsers():[User!]!
    }

    type Mutation {
        
    }
`;

export const myGraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});