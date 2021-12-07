import { Users } from '../../users/users.entity';
export declare class CreatePostsDto {
    readonly title: string;
    readonly article: string;
}
export declare class PostsDto {
    readonly title: string;
    readonly article: string;
    readonly image: string;
    readonly user: Users;
    readonly updatedDate: Date;
    readonly createdDate: Date;
}
