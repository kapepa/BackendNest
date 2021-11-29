import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { CreateUserDto, UserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
export declare class UsersService {
    private usersRepository;
    private roleServise;
    constructor(usersRepository: Repository<Users>, roleServise: RolesService);
    createUser(dto: CreateUserDto): Promise<UserDto>;
    getAllUser(): Promise<UserDto[]>;
}
