import { UserDto } from '../../users/dto/create-user.dto';
export declare class CreateRoleDto {
    readonly value: string;
    readonly description: string;
}
export declare class RoleDto {
    readonly id: string;
    readonly value: string;
    readonly description: string;
    readonly user?: UserDto;
    readonly updatedDate: Date;
    readonly createdDate: Date;
}
