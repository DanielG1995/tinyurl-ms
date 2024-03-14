import { Module } from '@nestjs/common';
import { UrlModule } from './url/url.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UrlModule, DatabaseModule, ConfigModule.forRoot(),],
  controllers: [],
  providers: [],
})
export class MsDbcrudModule { }
