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

  async findOne(email: string): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: { email: email },
    });
    return user;
  }

  async createUser(dto: CreateUserDto): Promise<UserDto> {
    try {
      const user = this.usersRepository.create(dto);
      const role = await this.roleServise.getRolesByValue('USER');
      user.roles = [role];
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

  async getUserByEmail(email: string): Promise<UserDto> {
    try {
      const user = await this.usersRepository.findOne({
        where: { email },
        relations: ['roles'],
      });
      return user;
    } catch (e) {
      return e.name;
    }
  }
}
