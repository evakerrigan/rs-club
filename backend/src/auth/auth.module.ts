import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { GithubStrategy, JwtStrategy } from './auth.strategy';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          signOptions: { expiresIn: '24h' },
          secret: configService.get<string>('JWT_SECRET'),
        };
      },
      inject: [ConfigService],
    }),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [GithubStrategy, JwtStrategy, AuthService],
})
export class AuthModule {}
