import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, lastValueFrom, of } from 'rxjs';

@Injectable()
export class AppService {

  constructor(@Inject('URL_SERVICE') private url: ClientProxy,
    @Inject('DB_SERVICE') private db: ClientProxy) { }

  async createUrl(url: string, host:string) {

    const key = await firstValueFrom(this.url.send({ action: 'new_url' }, url))
    return firstValueFrom(this.db.send({ action: 'save_url' }, { longUrl: url, key, tinyUrl: `${host || process.env.HOST_URL_BASE}${key}` }))
  }

  async getUrlByKey(key: string) {

    return firstValueFrom(this.db.send({ action: 'get_url' }, key))
  }

  getHello(): string {
    return 'Hello World!';
  }
}
