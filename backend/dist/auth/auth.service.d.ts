import { CreateUserDto, UserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IJwtToken } from './dto/auth.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    wrapperJwt(user: UserDto): {
        access_token: string;
    };
    login(dto: CreateUserDto): Promise<IJwtToken>;
    registration(dto: CreateUserDto): Promise<IJwtToken>;
}
