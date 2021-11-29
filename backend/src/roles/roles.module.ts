import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Rolse } from './roles.entity';
import { RolseUser } from './roles-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rolse, RolseUser])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
