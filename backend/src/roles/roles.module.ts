import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Rolse } from './roles.entity';
import { Users } from '../users/users.entity';
import { RolseUser } from './roles-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Rolse])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}
