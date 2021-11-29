import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Rolse } from './roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rolse])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
