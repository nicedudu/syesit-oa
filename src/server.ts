import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { ApplicationModule } from './modules/app.module';

const instance = express();

import "reflect-metadata";
import { createConnection, Connection } from 'typeorm';
import { Photo } from './entity/Photo';
import { PhotoMetadata } from './entity/PhotoMetadata';
import { User } from './entity/user/user.entity';
import {UserSercvice} from './entity/user/user.service';
import {TypeOrmDatabaseService} from './common/database/typeOrm.database.service';


const typeOrmDatabaseService = new TypeOrmDatabaseService()
const userService = new UserSercvice(typeOrmDatabaseService);
console.log('-----------------------\n');
userService.getAll().then(users =>{
  console.log(users);
})

async function bootstrap(): Promise<any> {
  const app = await NestFactory.create(ApplicationModule, instance);
  app.use(bodyParser.json());
  await app.listen(3000);
}

bootstrap().then(() => console.log('Application is listening on port 3000.'));
