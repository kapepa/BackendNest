import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Repository } from 'typeorm';
import { CreatePostsDto } from './dto/posts.dto';
import { UserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
    private userService: UsersService
  ) {}

  async create(dto: CreatePostsDto, profil: UserDto): Promise<any> {
    try {
      const user = await this.userService.getUserByEmail(profil.email);
      const post = await this.postsRepository.create(dto);
      user.posts = post;

      // post.user = profil;
      // const savePosts = await this.postsRepository.save(post);
      return true;
    } catch (e) {
      throw new HttpException(
        'Happened mistake in create post',
        HttpStatus.FORBIDDEN
      );
    }
  }
}
