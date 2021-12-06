import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { CreateUserDto, UserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { RoleUserDto } from './dto/role-user.dto';
import { BanUserDto } from './dto/ban-user.dto';
export declare class UsersService {
    private usersRepository;
    private roleServise;
    constructor(usersRepository: Repository<Users>, roleServise: RolesService);
    createUser(dto: CreateUserDto): Promise<UserDto>;
    getAllUser(): Promise<UserDto[]>;
    updateUser(id: string, field: string, data: any): Promise<any>;
    getUserByEmail(email: string): Promise<UserDto>;
    role(dto: RoleUserDto): Promise<UserDto>;
    ban(dto: BanUserDto): Promise<UserDto>;
}
