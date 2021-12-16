import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, UserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IJwtToken } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.userService.getUserByEmail(email);
      const isMatch = await bcrypt.compare(password, user.password);
      if (user && isMatch) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (e) {
      throw new HttpException(
        'Validate user mistake',
        HttpStatus.FORBIDDEN
      );
    }
  }

  wrapperJwt(user: UserDto) {
    const { password, jwtToken, ...data } = user;
    return {
      access_token: this.jwtService.sign({
        sub: user.id,
        ...data,
      }),
    };
  }

  async login(dto: CreateUserDto): Promise<IJwtToken> {
    const user = await this.userService.getUserByEmail(dto.email);
    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (user && isMatch) {
      const jwt = this.wrapperJwt(user);
      await this.userService.updateUser(user.id, 'jwtToken', jwt.access_token);
      return jwt;
    }
    throw new UnauthorizedException({ message: 'wrong email either password' });
  }

  async registration(dto: CreateUserDto): Promise<UserDto> {
    try {
      const candidate = await this.userService.getUserByEmail(dto.email);
      if (candidate) throw new HttpException(candidate, HttpStatus.BAD_REQUEST);
      const hash = await bcrypt.hash(
        dto.password,
        Number(process.env.BCRYPT_SALT)
      );
      const create = await this.userService.createUser({
        ...dto,
        password: hash,
      });
      return create;
    } catch (e) {
      throw new HttpException(
        'registration mistake',
        HttpStatus.FORBIDDEN
      );
    }
  }
}
