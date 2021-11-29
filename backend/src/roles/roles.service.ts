import { Injectable } from '@nestjs/common';
import { RoleDto } from './dto/roles.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rolse } from './roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rolse)
    private roleRepository: Repository<Rolse>,
  ) {}

  async createRole(dto: RoleDto): Promise<any> {
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
      const role = await this.roleRepository.find({ where: { value: value } });
      return role;
    } catch (e) {
      return e.name;
    }
  }
}
