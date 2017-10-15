import { Module } from '@nestjs/common';
import { GraphqlController } from '../controller/graphql.controller';
import { AuthModule } from '../common/auth/auth.module';

@Module({
    controllers: [GraphqlController],
    modules: [AuthModule],
})
export class ApplicationModule { }