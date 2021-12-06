import { Role } from '../../auth/dto/role.enum';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RoleUserDto {
  @ApiProperty({
    description: 'the user to whom a new role is added',
  })
  @IsString({ message: 'Wrong role id' })
  readonly userId: string;

  @ApiProperty({
    description: 'add new role user',
  })
  @IsOptional()
  @IsEnum(Role)
  readonly role: keyof typeof Role;
}