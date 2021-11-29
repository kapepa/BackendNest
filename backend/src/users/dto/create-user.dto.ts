import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'user email',
  })
  readonly email: string;
  @ApiProperty({
    description: 'user password',
  })
  readonly password: string;
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
  readonly password: string;
  @ApiProperty({
    description: 'user banned',
  })
  readonly banned: boolean;
  @ApiProperty({
    description: 'user reason',
  })
  readonly banReason: string;
  @ApiProperty({
    description: 'lastlatest data update user',
  })
  readonly updatedDate?: Date;
  @ApiProperty({
    description: 'date create users',
  })
  readonly createdDate?: Date;
}
