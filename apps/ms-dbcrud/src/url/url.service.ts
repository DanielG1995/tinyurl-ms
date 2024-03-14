import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { URLInterface } from './interfaces/url.interface';

@Injectable()
export class UrlService {
  constructor(
    @Inject('URL_MODEL')
    private urlModel: Model<URLInterface>,
  ) { }

  async create(createUrlDto: CreateUrlDto): Promise<URLInterface> {
    const urlByKey = await this.findOneByAlias(createUrlDto.key)
    console.log(createUrlDto, urlByKey)
    if (urlByKey) {
      return urlByKey
    }
    const newUrl = new this.urlModel(createUrlDto);
    return newUrl.save();
  }

  async findOneByAlias(key: string) {

    return await this.urlModel.findOne({ key })
  }

  async findAll(): Promise<URLInterface[]> {
    return this.urlModel.find().exec();
  }
}
