import { Role } from '../../auth/dto/role.enum';
export declare class RoleUserDto {
    readonly userId: string;
    readonly role: keyof typeof Role;
}
