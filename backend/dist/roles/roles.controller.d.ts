import { RolesService } from './roles.service';
import { RoleDto, CreateRoleDto } from './dto/roles.dto';
export declare class RolesController {
    private roleService;
    constructor(roleService: RolesService);
    create(dto: CreateRoleDto): Promise<RoleDto>;
    getByValue(val: string): Promise<RoleDto>;
}
