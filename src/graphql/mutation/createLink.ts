import linkType from '../types/link.type';
import { GraphQLList,
     GraphQLString ,
     GraphQLNonNull
    } from 'graphql';
import { links } from '../queries/getLinks';

export const createLink = {
    CreateLink:{
        type:linkType,
        args:{
            url: {
                type:new GraphQLNonNull(GraphQLString)
            }, 
            description: {
                type:new GraphQLNonNull(GraphQLString)
            }
        },
        resolve:(_, data) => {
            const newLink = Object.assign({ id: links.length + 1 }, data);
            console.log(data)
            newLink.url = data.url;
            newLink.description = data.description;
            links.push(newLink);
            return newLink;
        }
    }
} 