import { Roles } from '../roles/roles.entity';
export declare class Users {
    id: string;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Roles[];
    updatedDate: Date;
    createdDate: Date;
}
