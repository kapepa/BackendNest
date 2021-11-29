import { UsersService } from './users.service';
import { CreateUserDto, UserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(dto: CreateUserDto): Promise<UserDto>;
    getAllUser(): Promise<UserDto[]>;
}
