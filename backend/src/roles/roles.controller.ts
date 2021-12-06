import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleDto, CreateRoleDto } from './dto/roles.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/decorator/roles.decorator';
import { Role } from '../auth/dto/role.enum';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Post('/create')
  @ApiResponse({
    status: 200,
    description: 'Create new role',
    type: [RoleDto],
  })
  async create(@Body() dto: CreateRoleDto): Promise<RoleDto> {
    const role = await this.roleService.createRole(dto);
    return role;
  }

  @UseGuards(JwtAuthGuard)
  @Roles(Role.User, Role.Admin)
  @Post('/receive/:val')
  @ApiResponse({
    status: 200,
    description: 'Return role',
    type: [RoleDto],
  })
  async getByValue(@Param('val') val: string): Promise<RoleDto> {
    const role = await this.roleService.getRolesByValue(val);
    return role;
  }
}
