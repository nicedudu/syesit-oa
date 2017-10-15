import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { UserSercvice } from '../../entity/user/index';

@Middleware()
export class AuthMiddleware implements NestMiddleware {
    constructor(private readonly userService: UserSercvice) { }
    public resolve(): ExpressMiddleware {
        return async (req: Request, res: Response, next: NextFunction) => {
            if (req.headers.authorization && (req.headers.authorization as string).split(' ')[0] === 'Bearer') {
                const token = (req.headers.authorization as string).split(' ')[1];
                const decoded: any = jwt.verify(token, process.env.JWT_KEY || '');
                const user = await this.userService.get(decoded.id);
                if (!user) console.log('非法用户')
                next();
            } else {
                console.log('用户尚未登录');
                const user = await this.userService.get(1);
                console.log(user);
                next();
            }
        }
    }
}
