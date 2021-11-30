import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags} from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { IJwtToken } from './dto/auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @ApiCreatedResponse({
    status: 200,
    description: 'The successfully login.',
    // type: CreateUserDto,
  })
  async login(@Body() dto: CreateUserDto): Promise<IJwtToken> {
    const login = await this.authService.login(dto);
    return login;
  }
  @Post('/regist')
  @ApiCreatedResponse({
    status: 200,
    description: 'The successfully registration.',
    // type: CreateUserDto,
  })
  async registration(@Body() dto: CreateUserDto): Promise<IJwtToken> {
    const regist = await this.authService.registration(dto);
    return regist;
  }
}
