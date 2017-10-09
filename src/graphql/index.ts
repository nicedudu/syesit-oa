import {
    GraphQLSchema,
    GraphQLList,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
} from 'graphql';

import { getLinks } from './queries/getLinks';
import { createLink } from './mutation/createLink';
export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: getLinks
    }),
    mutation: new GraphQLObjectType({
        name:'Mutation',
        fields:createLink
    })
})