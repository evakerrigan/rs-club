import { Controller, Get, Req, Response, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Get()
  @UseGuards(AuthGuard('github'))
  async login() {
    //
  }

  @Get('callback')
  @UseGuards(AuthGuard('github'))
  async authCallback(@Req() req, @Response() res) {
    const user = req.user;
    const payload = { sub: user.id, username: user.username };
    // console.log('username =', user.username);
    // console.log('userid =', user.id);
    // console.log('payload =', payload);
    // console.log('accessToken =', this.jwtService.sign(payload));

    const accessToken = this.jwtService.sign(payload);

    res.cookie('accessToken', accessToken, {
      expires: new Date(new Date().getTime() + 60 * 1000),
      sameSite: 'strict',
      httpOnly: true,
    });

    return res.send({
      accessToken: this.jwtService.sign(payload),
      payload: payload,
    });

    // return { accessToken: this.jwtService.sign(payload), payload: payload };
  }
}
