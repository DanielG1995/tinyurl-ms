import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { MsDbcrudModule } from './ms-dbcrud.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MsDbcrudModule,
    {
      transport: Transport.TCP,
      options:{
        port:3002
      }
    },
  );
  await app.listen();
}
bootstrap();