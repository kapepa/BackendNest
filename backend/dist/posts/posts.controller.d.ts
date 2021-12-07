import { PostsService } from './posts.service';
import { CreatePostsDto } from './dto/posts.dto';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    create(dto: CreatePostsDto, req: any): Promise<any>;
}
