import { CreateRoleDto } from './dto/roles.dto';
import { Repository } from 'typeorm';
import { Roles } from './roles.entity';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: Repository<Roles>);
    createRole(dto: CreateRoleDto): Promise<any>;
    getRolesByValue(value: string): Promise<any>;
}
