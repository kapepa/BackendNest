import { ApiProperty } from '@nestjs/swagger';
import { RoleDto } from '../../roles/dto/roles.dto';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { Role } from '../../auth/dto/role.enum';
import { PostsDto } from '../../posts/dto/posts.dto';

export class CreateUserDto {
  @ApiProperty({
    description: 'user email',
  })
  @IsEmail({}, { message: 'Your email wrong' })
  readonly email: string;

  @ApiProperty({
    description: 'user password',
  })
  @IsNotEmpty({ message: 'Your password wrong' })
  @MinLength(8, {
    message: 'Password should be more eight characters',
  })
  readonly password: string;

  @ApiProperty({
    description: 'user role',
  })
  @IsOptional()
  @IsEnum(Role)
  readonly role?: string;
}

export class UserDto {
  @ApiProperty({
    description: 'unique id',
  })
  readonly id: string;

  @ApiProperty({
    description: 'user email',
  })
  readonly email: string;

  @ApiProperty({
    description: 'user password',
  })
  readonly password?: string;

  @ApiProperty({
    description: 'user banned',
  })
  readonly banned: boolean;

  @ApiProperty({
    description: 'user reason',
  })
  readonly banReason: string;

  @ApiProperty({
    description: 'roles user',
  })
  readonly roles?: RoleDto[];

  @ApiProperty({
    description: 'posts user',
  })
  posts?: PostsDto[];

  @ApiProperty({
    description: 'JwtToken',
  })
  readonly jwtToken: string;

  @ApiProperty({
    description: 'lastlatest data update user',
  })
  readonly updatedDate?: Date;

  @ApiProperty({
    description: 'date create users',
  })
  readonly createdDate?: Date;
}
