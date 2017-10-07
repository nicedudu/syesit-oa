import { Controller, Res, Req, Post, Next } from '@nestjs/common';
import { graphqlExpress } from 'apollo-server-express';
import { myGraphQLSchema } from './config/schema';


@Controller()
export class GraphqlController {
    
    @Post('graphql')
    public async create( @Req() request, @Res() response, @Next() next) {
        return graphqlExpress({ schema:myGraphQLSchema })(request, response, next);
    }
}