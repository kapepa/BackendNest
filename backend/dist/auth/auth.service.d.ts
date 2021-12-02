import { CreateUserDto, UserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IJwtToken } from './dto/auth.dto';
export declare class AuthService {
    private userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    wrapperJwt(user: UserDto): {
        access_token: string;
    };
    signin(dto: CreateUserDto): Promise<IJwtToken>;
    registration(dto: CreateUserDto): Promise<IJwtToken>;
}
