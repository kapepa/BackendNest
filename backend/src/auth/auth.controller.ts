import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags} from '@nestjs/swagger';
import { CreateUserDto, UserDto} from '../users/dto/create-user.dto';
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
  async signin(@Body() dto: CreateUserDto, @Request() req): Promise<IJwtToken> {
    console.log(req.user);
    const login = await this.authService.signin(dto);
    return login;
  }

  @UseGuards(LocalAuthGuard)
  @Post('/regist')
  @ApiCreatedResponse({
    status: 200,
    description: 'The successfully registration.',
    type: IJwtToken,
  })
  async registration(@Body() dto: CreateUserDto): Promise<IJwtToken> {
    const regist = await this.authService.registration(dto);
    return regist;
  }
}
