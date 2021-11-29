import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty({
    description: 'value role',
  })
  readonly value: string;
  @ApiProperty({
    description: 'description role',
  })
  readonly description: string;
}