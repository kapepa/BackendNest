import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({
    description: 'user who got banned',
  })
  @IsString({ message: 'Wrong role id' })
  readonly userId: string;

  @ApiProperty({
    description: 'why the user was blocked',
  })
  @IsString({ message: 'Wrong banReason' })
  readonly banReason: string;
}