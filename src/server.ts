import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { ApplicationModule } from './modules/app.module';

const instance = express();

async function bootstrap(): Promise<any> {
  const app = await NestFactory.create(ApplicationModule, instance);
  app.use(bodyParser.json());
  await app.listen(3000);
}

bootstrap().then(() => console.log('Application is listening on port 3000.'));
