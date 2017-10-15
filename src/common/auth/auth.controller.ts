import { Controller, Post, Get, Res, Req, Next } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Get('login')
    public async Login(@Res() res){
        const token = await this.authService.sign();
        return res.send('Bearer '+token);
    }
}