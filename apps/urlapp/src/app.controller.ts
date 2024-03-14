import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { firstValueFrom, of } from 'rxjs';

@Controller()
export class AppController {

  constructor(private urlservice: AppService) {

  }
  @Get(':id')
  async redirectTo(@Param('id') id: string, @Res() res: Response) {
    const resp = await this.urlservice.getUrlByKey(id)

    res.redirect(resp?.longUrl)
  }
  @Post('geturl')
  async getUrl(@Body('url') url: string, @Res() res: Response) {


    const resp = await this.urlservice.createUrl(url)
    res.status(201).json(resp)
  }
}