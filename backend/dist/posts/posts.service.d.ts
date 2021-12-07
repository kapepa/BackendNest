import { Posts } from './posts.entity';
import { Repository } from 'typeorm';
import { CreatePostsDto } from './dto/posts.dto';
import { UserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
export declare class PostsService {
    private postsRepository;
    private userService;
    constructor(postsRepository: Repository<Posts>, userService: UsersService);
    create(dto: CreatePostsDto, profil: UserDto): Promise<any>;
}
