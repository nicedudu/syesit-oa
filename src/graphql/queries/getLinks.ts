import linkType from '../types/link.type';
import { GraphQLList, GraphQLString } from 'graphql';

const links = [
    {
        id: 1,
        url: 'http://graphql.org/',
        description: 'The Best Query Language'
    },
    {
        id: 2,
        url: 'http://dev.apollodata.com',
        description: 'Awesome GraphQL Client'
    },
];

export const getLinks = {
    GetLinks: {
        type: new GraphQLList(linkType),
        resolve: () => {
            return links;
        }
    }
}


// export const WorldType = {
// 	type: GraphQLString,
// 	resolve() {
// 		return 'world';
// 	}
// };
