import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { CreateUserDto, UserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private roleServise: RolesService,
  ) {}

  async createUser(dto: CreateUserDto): Promise<UserDto> {
    try {
      const role = await this.roleServise.getRolesByValue('USER');
      const user = this.usersRepository.create(dto);
      user.roles = role;
      const save = await this.usersRepository.save(user);
      return save;
    } catch (e) {
      return e.name;
    }
  }

  async getAllUser(): Promise<UserDto[]> {
    try {
      const users = await this.usersRepository.find({
        relations: ['roles'],
      });
      return users;
    } catch (e){
      return e.name;
    }
  }
}
