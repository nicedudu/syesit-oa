import { Module , NestModule , MiddlewaresConsumer , RequestMethod} from '@nestjs/common';
import { GraphqlController } from '../controller/graphql.controller';
import { AuthModule } from '../common/auth/auth.module';
import { AuthMiddleware } from '../common/middlewares/auth.middleware';

@Module({
    controllers: [GraphqlController],
    modules: [AuthModule],
})
export class ApplicationModule implements NestModule { 
    configure(consumer:MiddlewaresConsumer):void{
        consumer.apply(AuthMiddleware).forRoutes({
            path:'/auth/login',method:RequestMethod.GET
        })
    }
}