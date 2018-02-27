
import { Module } from '@nestjs/common';
import ArticalController from './artical.controller';

@Module({
  controllers: [ArticalController]
})
export default class ArticalModule {}