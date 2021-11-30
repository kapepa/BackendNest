import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '../../users/dto/create-user.dto';

export class CreateRoleDto {
  @ApiProperty({
    description: 'value role',
  })
  readonly value: string;
  @ApiProperty({
    description: 'description role',
  })
  readonly description: string;
}

export class RoleDto {
  @ApiProperty({
    description: 'id role',
  })
  readonly id: string;
  @ApiProperty({
    description: 'value role',
  })
  readonly value: string;
  @ApiProperty({
    description: 'description role',
  })
  readonly description: string;
  @ApiProperty({
    description: 'user data',
  })
  readonly user?: UserDto[];
  @ApiProperty({
    description: 'lastlatest data update role',
  })
  readonly updatedDate: Date;
  @ApiProperty({
    description: 'date create role',
  })
  readonly createdDate: Date;
}
