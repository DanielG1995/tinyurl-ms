import { Module } from '@nestjs/common';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';
import { urlProviders } from './url.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UrlController],
    providers: [UrlService, ...urlProviders],
})
export class UrlModule { }