import { Users } from '../users/users.entity';
export declare class Roles {
    id: string;
    value: string;
    description: string;
    user: Users[];
    updatedDate: Date;
    createdDate: Date;
}
