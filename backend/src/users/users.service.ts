import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { CreateUserDto, UserDto } from './dto/create-user.dto';
import { RolesService } from '../roles/roles.service';
import { Role } from '../auth/dto/role.enum';
import { RoleUserDto } from './dto/role-user.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private roleServise: RolesService
  ) {}

  async createUser(dto: CreateUserDto): Promise<UserDto> {
    try {
      const user = this.usersRepository.create(dto);
      const role = await this.roleServise.getRolesByValue(
        Object.values<string>(Role).includes(dto.role) ? dto.role : 'USER'
      );
      if (!role)
        throw new HttpException('Such role not found', HttpStatus.FORBIDDEN);
      user.roles = [role];
      const save = await this.usersRepository.save(user);
      return save;
    } catch (e) {
      throw new HttpException(
        'Happened mistake in create user',
        HttpStatus.FORBIDDEN
      );
    }
  }

  async getAllUser(): Promise<UserDto[]> {
    try {
      const users = await this.usersRepository.find({
        relations: ['roles'],
      });
      return users;
    } catch (e) {
      throw new HttpException(
        'Happened mistake in registration',
        HttpStatus.FORBIDDEN
      );
    }
  }

  async updateUser(id: string, field: string, data: any): Promise<any> {
    try {
      const update = await this.usersRepository.update(id, { [field]: data });
      return null;
    } catch (e) {
      throw new HttpException(
        'Happened mistake in update user',
        HttpStatus.FORBIDDEN
      );
    }
  }

  async upgradeUser(profil: UserDto): Promise<UserDto> {
    const user = await this.usersRepository.save(profil);
    return user;
  }

  async getUserByEmail(email: string): Promise<UserDto> {
    try {
      const user = await this.usersRepository.findOne({
        where: { email },
        relations: ['roles', 'posts'],
      });
      return user;
    } catch (e) {
      throw new HttpException(
        'Happened mistake in receive user on email',
        HttpStatus.FORBIDDEN
      );
    }
  }

  async role(dto: RoleUserDto): Promise<UserDto> {
    try {
      const { role, userId } = dto;
      const user = await this.usersRepository.findOne({
        where: { id: userId },
        relations: ['roles'],
      });
      const userRole = await this.roleServise.getRolesByValue(role);
      user.roles.push(userRole);
      const save = await this.usersRepository.save(user);
      return save;
    } catch (e) {
      throw new HttpException(
        'Happened mistake in receive user role',
        HttpStatus.FORBIDDEN
      );
    }
  }

  async ban(dto: BanUserDto): Promise<UserDto>{
    try {
      const { banReason, userId } = dto;
      const user = await this.usersRepository.findOne({
        where: { id: userId },
        relations: ['roles'],
      });
      user.banned = true;
      user.banReason = banReason;
      user.roles = [];
      const updateSave = await this.usersRepository.save(user);
      return updateSave;
    } catch (e) {
      throw new HttpException(
        'Attemp set ban happen failed',
        HttpStatus.FORBIDDEN
      );
    }
  }
}
