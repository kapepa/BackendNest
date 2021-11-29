import { Rolse } from '../roles/roles.entity';
export declare class Users {
    id: string;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Rolse[];
    updatedDate: Date;
    createdDate: Date;
}
