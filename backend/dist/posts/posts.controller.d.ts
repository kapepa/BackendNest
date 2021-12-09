/// <reference types="multer" />
import { PostsService } from './posts.service';
import { CreatePostsDto } from './dto/posts.dto';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    create(file: Express.Multer.File[], dto: CreatePostsDto, req: any): Promise<any>;
}
