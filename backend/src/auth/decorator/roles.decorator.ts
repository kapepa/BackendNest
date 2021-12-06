import { SetMetadata } from '@nestjs/common';
import { Role } from '../dto/role.enum';
import { config } from 'dotenv';

config();

export const Roles = (...roles: Role[]) =>
  SetMetadata(process.env.ROLES_KEY, roles);
