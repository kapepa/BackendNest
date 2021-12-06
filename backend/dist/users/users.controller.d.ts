import { UsersService } from './users.service';
import { CreateUserDto, UserDto } from './dto/create-user.dto';
import { RoleUserDto } from './dto/role-user.dto';
import { BanUserDto } from './dto/ban-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(dto: CreateUserDto): Promise<UserDto>;
    getAllUser(): Promise<UserDto[]>;
    role(req: UserDto, role: RoleUserDto): Promise<UserDto>;
    ban(dto: BanUserDto): Promise<UserDto>;
}
