import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(dto: CreateUserDto): Promise<any>;
    registration(dto: CreateUserDto): Promise<any>;
    validateUser(username: string, pass: string): Promise<any>;
}
