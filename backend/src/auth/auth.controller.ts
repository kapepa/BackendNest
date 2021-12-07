import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { IJwtToken } from './dto/auth.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { Roles } from './decorator/roles.decorator';
import { Role } from './dto/role.enum';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @ApiCreatedResponse({
    status: 200,
    description: 'The successfully login.',
    type: IJwtToken,
  })
  async login(@Body() dto: CreateUserDto, @Request() req): Promise<IJwtToken> {
    const jwt = await this.authService.login(dto);
    return jwt;
  }

  @Post('/regist')
  @ApiCreatedResponse({
    status: 200,
    description: 'The successfully registration.',
    type: IJwtToken,
  })
  async registration(@Body() dto: CreateUserDto): Promise<UserDto> {
    const regist = await this.authService.registration(dto);
    return regist;
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.User, Role.Admin)
  @Post('/up')
  @ApiCreatedResponse({
    status: 200,
    description: 'Up user',
    type: IJwtToken,
  })
  async up(@Request() req) {
    // console.log(req.user);
  }
}
