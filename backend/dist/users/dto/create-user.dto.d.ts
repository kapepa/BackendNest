export declare class CreateUserDto {
    readonly email: string;
    readonly password: string;
}
export declare class UserDto {
    readonly id: string;
    readonly email: string;
    readonly password: string;
    readonly banned: boolean;
    readonly banReason: string;
    readonly updatedDate?: Date;
    readonly createdDate?: Date;
}
