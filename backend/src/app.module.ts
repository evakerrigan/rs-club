import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.ADMIN_NAME_MONGO}:${process.env.ADMIN_PASSWORD}@rsclub.amcvl3v.mongodb.net/rs?retryWrites=true&w=majority`,
    ),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
