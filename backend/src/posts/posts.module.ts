import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { UsersModule } from '../users/users.module';
import { FileModule } from '../file/file.module';

@Module({
  imports: [TypeOrmModule.forFeature([Posts]), UsersModule, FileModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
