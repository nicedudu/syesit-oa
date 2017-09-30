import { Module } from '@nestjs/common';
import { CatsController } from '../controller/cats.controller';
@Module({
    controllers:[CatsController],
    modules: [],
})
export class ApplicationModule {}