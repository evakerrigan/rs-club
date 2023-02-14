import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const app = await NestFactory.create(AppModule, {
  //   cors: {
  //     origin: 'http://localhost:3000',
  //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //     preflightContinue: false,
  //     allowedHeaders: ['Content-Type', 'Authorization'],
  //   },
  // });

  const allowedDomains = ['http://127.0.0.1:3000'];

  app.enableCors({
    origin: allowedDomains,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  // app.enableCors({
  //   origin: ['http://localhost:3000'],
  //   methods: ['POST', 'PUT', 'DELETE', 'GET'],
  // credentials: true,
  // });

  // app.enableCors();

  // app.use(
  //   cors({
  //     credentials: true,
  //     origin: '*',
  //   }),
  // );

  // app.enableCors({
  //   origin: '*',
  // });

  // app.enableCors({
  //   credentials: true,
  //   origin: true,
  // });

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });

  await app.listen(8000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
