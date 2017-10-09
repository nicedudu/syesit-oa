import {
    GraphQLSchema,
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
} from 'graphql';

import { getLinks } from './queries/getLinks';
export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: getLinks
    })
})