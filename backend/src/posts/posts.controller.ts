import {
  Body,
  Controller,
  Post,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostsDto, PostsDto } from './dto/posts.dto';
import { Roles } from '../auth/decorator/roles.decorator';
import { Role } from '../auth/dto/role.enum';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin, Role.User)
  @Post('/create')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  @ApiResponse({
    status: 200,
    description: 'Create new posts and save image',
    type: [PostsDto],
  })
  async create(@UploadedFiles() file:Express.Multer.File[] , @Body() dto: CreatePostsDto, @Req() req): Promise<any> {
    const image = JSON.parse(JSON.stringify(file)).image[0];
    const post = await this.postsService.create(image, dto, req.user);
    return post;
  }
}
