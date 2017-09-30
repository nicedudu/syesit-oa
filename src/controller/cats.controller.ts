import { Controller, Get, Req, Post, Body,Res } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Photo } from '../entity/Photo';
import { getConnection } from 'typeorm';
@Controller('cats')
export class CatsController {
  
  @Post()
  Create( @Body() photo: Photo) {

  }

  @Get()
  findAll( @Req() request,@Res() response){
    const connection = getConnection('default');
    connection.getRepository(Photo).find().then(p => {
      response.json(p);
    })
  }
}
