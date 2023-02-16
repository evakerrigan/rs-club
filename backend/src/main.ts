import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // app.enableCors({
  //   origin: ['http://localhost:3000'],
  //   methods: ['POST', 'PUT', 'DELETE', 'GET'],
  //   credentials: true,
  // });

  // const app = await NestFactory.create(AppModule, {
  //   cors: {
  //     origin: 'http://localhost:3000',
  //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //     preflightContinue: false,
  //     allowedHeaders: ['Content-Type', 'Authorization'],
  //   },
  // });

  // app.enableCors({
  //   origin: true,
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   credentials: true,
  // });

  // const allowedDomains = ['http://localhost:3000'];

  // app.enableCors({
  //   origin: allowedDomains,
  //   credentials: true,
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  // });

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

  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  //   next();
  // });

  // app.enableCors({
  //   origin: ['http://localhost:3000'],
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //   preflightContinue: false,
  //   optionsSuccessStatus: 204,
  //   credentials: true,
  // });

  await app.listen(8000);

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
