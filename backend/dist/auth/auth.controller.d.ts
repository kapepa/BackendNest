import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { IJwtToken } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signin(dto: CreateUserDto, req: any): Promise<IJwtToken>;
    registration(dto: CreateUserDto): Promise<IJwtToken>;
}
