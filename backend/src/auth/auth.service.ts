import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(dto: CreateUserDto): Promise<any> {
    const candidate = await this.userService.getUserByEmail(dto.email);
    if (candidate) throw new HttpException(candidate, HttpStatus.BAD_REQUEST);

    const hash = await bcrypt.hash(
      dto.password,
      Number(process.env.BCRYPT_SALT),
    );
    const create = await this.userService.createUser({
      ...dto,
      password: hash,
    });

    return { access_token: this.jwtService.sign(create) };
  }

  async registration(dto: CreateUserDto): Promise<any> {
    return [];
  }

  async validateUser(username: string, pass: string): Promise<any> {
    return [];
  }
}
