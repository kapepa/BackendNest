import { Roles } from '../roles/roles.entity';
import { Posts } from '../posts/posts.entity';
export declare class Users {
    id: string;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    roles: Roles[];
    posts: Posts[];
    jwtToken: string;
    updatedDate: Date;
    createdDate: Date;
}
