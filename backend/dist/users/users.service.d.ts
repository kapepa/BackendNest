import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { CreateUserDto, UserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
export declare class UsersService {
    private usersRepository;
    private roleServise;
    constructor(usersRepository: Repository<Users>, roleServise: RolesService);
    findOne(email: string): Promise<any>;
    createUser(dto: CreateUserDto): Promise<UserDto>;
    getAllUser(): Promise<UserDto[]>;
    updateUser(id: string, field: string, data: any): Promise<any>;
    getUserByEmail(email: string): Promise<UserDto>;
}
