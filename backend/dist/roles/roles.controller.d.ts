import { RolesService } from './roles.service';
import { RoleDto } from './dto/roles.dto';
export declare class RolesController {
    private roleService;
    constructor(roleService: RolesService);
    create(dto: RoleDto): Promise<any>;
    getByValue(val: string): Promise<any>;
}
