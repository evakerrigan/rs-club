import { Controller, Get, Req, Response, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('github'))
  async login() {
    //
  }

  @Get('callback')
  @UseGuards(AuthGuard('github'))
  async authCallback(@Req() req, @Response() res) {
    const user = req.user;
    const userId = user.id;
    const userName = user.username;
    // const avatarUrl = user.user._json.avatar_url;
    const payload = { sub: user.id, username: user.username };
    const rsAccessToken = this.jwtService.sign(payload);
    // console.log('user', user);
    console.log('userId =', userId);
    console.log('userName =', userName);
    // console.log('avatarUrl =', avatarUrl);
    console.log('rsAccessToken =', rsAccessToken);

    // тут должна быть функция записи в бд как минимум 4 параметров
    // userId, userName, avatarUrl, rsAccessToken

    res.cookie('rsAccessToken', rsAccessToken, {
      expires: new Date(new Date().getTime() + 30 * 1000),
      sameSite: 'strict',
      httpOnly: false,
    });
    res.cookie('userName', userName, {
      expires: new Date(new Date().getTime() + 30 * 1000),
    });

    res.redirect(302, 'http://localhost:3000');
  }
}
