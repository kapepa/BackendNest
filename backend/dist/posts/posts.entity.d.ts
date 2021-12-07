import { Users } from '../users/users.entity';
export declare class Posts {
    id: string;
    title: string;
    article: string;
    image: string;
    user: Users;
    updatedDate: Date;
    createdDate: Date;
}
