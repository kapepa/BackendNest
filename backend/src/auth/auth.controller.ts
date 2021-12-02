import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags} from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { IJwtToken } from './dto/auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/login')
  @ApiCreatedResponse({
    status: 200,
    description: 'The successfully login.',
    type: IJwtToken,
  })
  async login(@Body() dto: CreateUserDto): Promise<IJwtToken> {
    const login = await this.authService.login(dto);
    return login;
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('/regist')
  // @ApiCreatedResponse({
  //   status: 200,
  //   description: 'The successfully registration.',
  //   type: IJwtToken,
  // })
  // async registration(@Body() dto: CreateUserDto): Promise<IJwtToken> {
  //   const regist = await this.authService.registration(dto);
  //   return regist;
  // }
}
