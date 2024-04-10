import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'URL_SERVICE', transport: Transport.TCP, options: { host:'tinyurlmicroservice',port: 3000 } },
      { name: 'DB_SERVICE', transport: Transport.TCP, options: {host:'msdbcrud', port: 3002 } },
    ]),
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
