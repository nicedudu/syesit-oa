import { Module } from '@nestjs/common';
import { CatsController } from '../controller/cats.controller';
import { GraphqlController } from '../controller/graphql.controller';
@Module({
    controllers: [CatsController, GraphqlController],
    modules: [],
})
export class ApplicationModule { }