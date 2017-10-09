import linkType from '../types/link.type';
import { GraphQLList,
     GraphQLString ,
     GraphQLNonNull
    } from 'graphql';
import { links } from '../queries/getLinks';

export const createLink = {
    CreateLink:{
        type:new GraphQLList(linkType),
        args:{
            url: {
                type:new GraphQLNonNull(GraphQLString)
            }, 
            description: {
                type:new GraphQLNonNull(GraphQLString)
            }
        },
        resolve:(source) => {
            // const newLink = Object.assign({ id: links.length + 1 }, source);
            // links.push(newLink);
            return "Hello";
        }
    }
} 