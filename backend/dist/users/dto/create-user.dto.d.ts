import { RoleDto } from '../../roles/dto/roles.dto';
import { PostsDto } from '../../posts/dto/posts.dto';
export declare class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly role?: string;
}
export declare class UserDto {
    readonly id: string;
    readonly email: string;
    readonly password?: string;
    readonly banned: boolean;
    readonly banReason: string;
    readonly roles?: RoleDto[];
    posts: PostsDto[];
    readonly jwtToken: string;
    readonly updatedDate?: Date;
    readonly createdDate?: Date;
}
