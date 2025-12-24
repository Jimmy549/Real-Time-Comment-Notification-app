import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Add a simple health check route
  app.getHttpAdapter().get('/', (req, res) => {
    res.json({ message: 'Real-Time Comment System Backend is running!', status: 'OK' });
  });
  
  app.enableCors({
    origin: [
      'http://localhost:8000',
      'https://frontend-ashen-gamma-48.vercel.app',
      'https://real-time-comment-frontend-eight.vercel.app',
      'https://real-time-comment-frontend.vercel.app',
      'https://real-time-comment-frontend-5iug7kt9y-jameels-projects-8c36dc76.vercel.app'
    ],
    methods: ['GET', 'POST'],
    credentials: true
  });
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`Backend server running on port ${port}`);
}
bootstrap();
