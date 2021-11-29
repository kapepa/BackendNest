import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UserDto } from './dto/create-user.dto';
import { ApiResponse, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/create')
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: [UserDto],
  })
  async createUser(@Body() dto: CreateUserDto): Promise<UserDto> {
    const user = await this.userService.createUser(dto);
    return user;
  }

  @Post('/all')
  @ApiResponse({
    status: 200,
    description: 'Receive all users',
    type: [UserDto],
  })
  async getAllUser(): Promise<UserDto[]> {
    const user = await this.userService.getAllUser();
    return user;
  }
}
