import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_URL || ['http://localhost:8000', 'https://frontend-ashen-gamma-48.vercel.app'],
    methods: ['GET', 'POST'],
  });
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Backend server running on port ${port}`);
}
bootstrap();
