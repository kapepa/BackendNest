import { RoleDto } from './dto/roles.dto';
import { Repository } from 'typeorm';
import { Rolse } from './roles.entity';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: Repository<Rolse>);
    createRole(dto: RoleDto): Promise<any>;
    getRolesByValue(value: string): Promise<any>;
}
