import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserSettingsModule } from './user-settings/user-settings.module';
import { UserPreferencesModule } from './user-preferences/user-preferences.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.ADMIN_NAME_MONGO}:${process.env.ADMIN_PASSWORD}@rsclub.amcvl3v.mongodb.net/rs?retryWrites=true&w=majority`,
    ),
    //UserSettingsModule,
    UserPreferencesModule,
    UsersModule,
  ],
})
export class AppModule {}
