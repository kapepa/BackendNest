/// <reference types="multer" />
import { Posts } from './posts.entity';
import { Repository } from 'typeorm';
import { CreatePostsDto, PostsDto } from './dto/posts.dto';
import { UserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { FileService } from '../file/file.service';
export declare class PostsService {
    private postsRepository;
    private userService;
    private fileService;
    constructor(postsRepository: Repository<Posts>, userService: UsersService, fileService: FileService);
    create(image: Express.Multer.File, dto: CreatePostsDto, profil: UserDto): Promise<any>;
    getOne(id: string): Promise<PostsDto>;
}
