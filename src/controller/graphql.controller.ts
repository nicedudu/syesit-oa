'use strict';

import { Controller, Get, Post, Req, Res, Next } from '@nestjs/common';
import { graphqlExpress , graphiqlExpress} from 'apollo-server-express';
// import { schema } from '../graphql/config/schema';
import schema from '../graphql/index';

@Controller('graphql')
export class GraphqlController {

    @Post('/')
    index( @Req() req, @Res() res, @Next() next) {
        return graphqlExpress({ schema })(req, res, next);
    }

    @Get('/graphiql')
    graphiql( @Req() req, @Res() res, @Next() next) {
        return graphiqlExpress({
            endpointURL: '/graphql/',
          })(req, res, next);
    }
}