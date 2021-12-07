import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/roles.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles)
    private roleRepository: Repository<Roles>,
  ) {}

  async createRole(dto: CreateRoleDto): Promise<any> {
    try {
      const createRole = this.roleRepository.create(dto);
      const saveRole = await this.roleRepository.save(createRole);
      return saveRole;
    } catch (e) {
      return e.name;
    }
  }

  async getRolesByValue(value: string): Promise<any> {
    try {
      const role = await this.roleRepository.findOne({
        where: { value: value },
      });
      return role;
    } catch (e) {
      return e.name;
    }
  }
}
