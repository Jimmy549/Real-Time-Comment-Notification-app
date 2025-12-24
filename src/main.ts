import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:8000',
      'https://frontend-ashen-gamma-48.vercel.app',
      'https://real-time-comment-frontend-eight.vercel.app'
    ],
    methods: ['GET', 'POST'],
    credentials: true
  });
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`Backend server running on port ${port}`);
}
bootstrap();
