import { Controller, Get, Req, Response, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('github'))
  async login() {
    //
  }
  
  async validateUser(username: string, rsAccessToken: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.rsAccessToken === rsAccessToken) {
      const { rsAccessToken, ...result } = user;
      return result;
    }
    return null;
  }

  @Get('callback')
  @UseGuards(AuthGuard('github'))
  async authCallback(@Req() req, @Response() res) {
    const user = req.user;
    const userName = user.username;
    const avatarUrl = user.photos[0].value 
    const payload = { sub: user.id, username: user.username };

    const rsAccessToken = this.jwtService.sign(payload);

    this.usersService.create({
      githubName: userName,
      profilePicture: avatarUrl,
      rsAccessToken,
    });

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
