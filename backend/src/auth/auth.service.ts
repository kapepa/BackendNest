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
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log(user);
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  wrapperJwt(user: UserDto) {
    return {
      access_token: this.jwtService.sign({
        email: user.email,
        password: user.password,
        sub: user.id,
      }),
    };
  }

  async signin(dto: CreateUserDto): Promise<IJwtToken> {
    const user = await this.userService.getUserByEmail(dto.email);
    const isMatch = await bcrypt.compare(dto.password, user.password);
    if (user && isMatch) return this.wrapperJwt(user);
    throw new UnauthorizedException({ message: 'wrong email either password' });
  }

  async registration(dto: CreateUserDto): Promise<IJwtToken> {
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
    return this.wrapperJwt(create);
  }
}
