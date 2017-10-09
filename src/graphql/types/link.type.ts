import { GraphQLList, GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
    name: 'linkType',
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        url: {
            type: new GraphQLNonNull(GraphQLString)
        },
        description: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
});
