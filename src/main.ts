/* eslint-disable @typescript-eslint/no-namespace */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare global {
  namespace NodeJS {
    interface Global {
      secretkey: string | null
    }
  }
}
global.secretkey = null

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
