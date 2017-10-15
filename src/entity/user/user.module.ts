import { Module } from '@nestjs/common';
import { UserSercvice } from './user.service';

@Module({
    modules: [UserSercvice]
})
export class UserModule { }