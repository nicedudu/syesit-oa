import * as GraphQLJSON from 'graphql-type-json';
import { getConnection } from 'typeorm';
import { User } from '../../../entity/user';

export const resolvers = {
    JSON: GraphQLJSON,
    Query: {
        getUsers: () => {
            const connection = getConnection('default');
            connection.getRepository(User).find().then(p => {
              return p;
            })
        }
    },
    Mutation: {

    }
}