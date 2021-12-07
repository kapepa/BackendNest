import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostsDto, PostsDto } from './dto/posts.dto';
import { Roles } from '../auth/decorator/roles.decorator';
import { Role } from '../auth/dto/role.enum';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin, Role.User)
  @Post('/create')
  @ApiResponse({
    status: 200,
    description: 'Create new posts',
    type: [PostsDto],
  })
  async create(@Body() dto: CreatePostsDto, @Req() req): Promise<any> {
    const post = await this.postsService.create(dto, req.user);
    return post;
  }
}
