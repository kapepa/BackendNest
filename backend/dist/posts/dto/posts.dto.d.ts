import { Users } from '../../users/users.entity';
export declare class CreatePostsDto {
    readonly title: string;
    readonly article: string;
    readonly image?: any;
}
export declare class PostsDto {
    readonly id: string;
    readonly title: string;
    readonly article: string;
    readonly image: string;
    readonly user: Users;
    readonly updatedDate: Date;
    readonly createdDate: Date;
}
