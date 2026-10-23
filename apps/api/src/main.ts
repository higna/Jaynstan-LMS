import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // frontend dev origin only; tighten per environment later
  app.enableCors({ origin: 'http://localhost:4000', credentials: true });
  await app.listen(process.env.PORT ?? 4500);
}
bootstrap();