import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { Repository } from 'typeorm';
import { CreatePostsDto, PostsDto } from './dto/posts.dto';
import { UserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { FileService } from '../file/file.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
    private userService: UsersService,
    private fileService: FileService,
  ) {}

  async create(
    image: Express.Multer.File,
    dto: CreatePostsDto,
    profil: UserDto
  ): Promise<any> {
    try {
      const user = await this.userService.getUserByEmail(profil.email);
      const post = await this.postsRepository.create(dto);
      user.posts = [post];

      if (image) {
        const saveImage = await this.fileService.load(image);
        post.image = saveImage;
      }

      await this.postsRepository.save(post);
      await this.userService.upgradeUser(user);

      return post;
      return true;
    } catch (e) {
      throw new HttpException(
        'Happened mistake in create post',
        HttpStatus.FORBIDDEN
      );
    }
  }

  async getOne(id: string): Promise<PostsDto> {
    const article = await this.postsRepository.findOne({
      where: { id },
      relations: ['user'],
    });
    return article;
  }
}
