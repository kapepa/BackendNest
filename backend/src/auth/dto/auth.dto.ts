import { ApiProperty } from '@nestjs/swagger';

export class IJwtToken {
  @ApiProperty({
    description: 'jwt token',
  })
  access_token: string;
}