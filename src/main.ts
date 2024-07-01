import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // * class validation 사용 하기위해 등록!
  const PORT = process.env.PORT;
  await app.listen(PORT);
}
bootstrap();
