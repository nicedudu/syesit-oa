import { Module } from '@nestjs/common';
import { GraphqlController } from '../controller/graphql.controller';
@Module({
    controllers: [GraphqlController],
    modules: [],
})
export class ApplicationModule { }