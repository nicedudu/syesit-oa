import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import { Component } from '@nestjs/common';
import { IAuthService, IJwtOptions } from './interface/auth.interface';
import { User, UserSercvice } from '../../entity/user/index';

@Component()
export class AuthService implements IAuthService {

    constructor(private readonly userService: UserSercvice) { }
    private _options: IJwtOptions = {
        algorithm: 'HS256',
        expiresIn: '2 days',
        jwtid: process.env.JWT_ID || ''
    };

    get options(): IJwtOptions {
        return this._options;
    }

    set options(value: IJwtOptions) {
        this._options.algorithm = value.algorithm;
    }

    public async sign(): Promise<string> {
        const user = await this.userService.get(1);
        const payload = {
            id: user.id,
            email: user.email
        }

        return await jwt.sign(payload, process.env.JWT_KEY || '', this._options);
    }
}