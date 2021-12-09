import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateDateColumn, ManyToOne, UpdateDateColumn} from "typeorm";
import { Users } from '../../users/users.entity';

export class CreatePostsDto {
  @ApiProperty({
    description: 'post title',
  })
  @IsString({ message: 'title not is string' })
  readonly title: string;

  @ApiProperty({
    description: 'post article',
  })
  @IsString({ message: 'content not is string' })
  readonly article: string;
  readonly image?: any;
}

export class PostsDto {
  @ApiProperty({
    description: 'post id',
  })
  readonly id: string;

  @ApiProperty({
    description: 'post title',
  })
  @IsString({ message: 'title not is string' })
  readonly title: string;

  @ApiProperty({
    description: 'post article',
  })
  @IsString({ message: 'article not is string' })
  readonly article: string;

  readonly image: string;

  readonly user: Users;

  readonly updatedDate: Date;

  readonly createdDate: Date;
}
