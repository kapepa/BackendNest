import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { Users } from './users.entity';
import { Rolse } from '../roles/roles.entity';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Rolse]), RolesModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
