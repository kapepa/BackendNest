import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class IJwtToken {
  @ApiProperty({
    description: 'jwt token',
  })
  @IsNotEmpty({ message: 'access_token empty' })
  @IsString({ message: 'wrong access_token' })
  access_token: string;
}