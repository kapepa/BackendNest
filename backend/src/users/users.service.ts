import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { CreateUserDto, UserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createUser(dto: CreateUserDto): Promise<UserDto> {
    try {
      const user = this.usersRepository.create(dto);
      const save = await this.usersRepository.save(user);
      return save;
    } catch (e) {
      return e.name;
    }
  }

  async getAllUser(): Promise<UserDto[]> {
    try {
      const users = await this.usersRepository.find();
      return users;
    } catch (e){
      return e.name;
    }
  }
}
