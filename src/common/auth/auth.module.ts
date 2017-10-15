import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserSercvice } from '../../entity/user/user.service';

@Module({
    controllers: [AuthController],
    components: [AuthService, UserSercvice]
})
export class AuthModule {

}