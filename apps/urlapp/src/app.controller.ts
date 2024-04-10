import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { AppService } from './app.service';

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
  async getUrl(@Body('url') url: string, @Res() res: Response, @Req() req: Request) {

    const resp = await this.urlservice.createUrl(url, req.headers?.host)
    res.status(201).json(resp)
  }
}