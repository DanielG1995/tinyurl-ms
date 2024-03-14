import { Controller, Get, Post } from '@nestjs/common';
import { UrlService } from './url.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) { }

  @MessagePattern({ action: 'save_url' })
  saveUrl(url: CreateUrlDto) {
    return this.urlService.create(url);
  }

  @MessagePattern({ action: 'get_url' })
  getUrl(key: string) {
    return this.urlService.findOneByAlias(key);
  }
}
