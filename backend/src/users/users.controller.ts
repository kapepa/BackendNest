import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UserDto } from './dto/create-user.dto';
import { ApiResponse, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { Roles } from '../auth/decorator/roles.decorator';
import { Role } from '../auth/dto/role.enum';
import { RoleUserDto } from './dto/role-user.dto';
import { BanUserDto } from './dto/ban-user.dto';

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

  @UseGuards(JwtAuthGuard)
  @Roles(Role.User, Role.Admin)
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

  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Post('/role')
  @ApiResponse({
    status: 200,
    description: 'Set new role user!',
    type: [UserDto],
  })
  async role(@Request() req: UserDto, @Body() role: RoleUserDto): Promise<UserDto> {
    const user = await this.userService.role(role);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Put('/ban')
  @ApiResponse({
    status: 200,
    description: 'Ban user',
    type: [UserDto],
  })
  async ban(@Body() dto: BanUserDto): Promise<UserDto>{
    const user = await this.userService.ban(dto);
    return user;
  }
}
