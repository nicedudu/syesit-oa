import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { ApplicationModule } from './modules/app.module';

const instance = express();

import "reflect-metadata";
import { createConnection, Connection } from 'typeorm';
import { Photo } from './entity/Photo';
import { PhotoMetadata } from './entity/PhotoMetadata';
import { User } from './entity/user';

createConnection().then(async connection => {
console.log("数据库创建成功");

// Create a photo
let photo = new Photo();
photo.name = "Me and Bears";
photo.description = "I am near polar bears";
photo.filename = "photo-with-bears.jpg";
photo.views = 1;
photo.isPublished = true;
await connection.manager.save(photo);
// Create a photo metadata
let metadata = new PhotoMetadata();
metadata.height = 640;
metadata.width = 480;
metadata.compressed = true;
metadata.comment = "cybershoot";
metadata.orientation = "portait";
metadata.photo = photo; // this way we connect them
await connection.manager.save(metadata);

let user = new User();
user.email = '592026320@qq.com';
user.firstName = 'zeng';
user.lastName = 'fr';
user.createAt = '2017-10-06';
user.updatedAt = '2017-10-06';
user.deletedAt = '2017-10-06';
await connection.manager.save(metadata);

console.log("Metadata is saved, and relation between metadata and photo is created in the database too");
}).catch(error => console.log(error));

async function bootstrap(): Promise<any> {
  const app = await NestFactory.create(ApplicationModule, instance);
  app.use(bodyParser.json());
  await app.listen(3000);
}

bootstrap().then(() => console.log('Application is listening on port 3000.'));
