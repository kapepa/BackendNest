import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../dto/role.enum';
import { config } from 'dotenv';
import { JwtService } from '@nestjs/jwt';

config();

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
        process.env.ROLES_KEY,
        [context.getHandler(), context.getClass()]
      );
      if (!requiredRoles) {
        return true;
      }
      const req = context.switchToHttp().getRequest();
      const header = req.headers.authorization;
      const token = header.split(' ').pop();
      const verify = this.jwtService.verify(token);

      return verify.roles.some((role) => requiredRoles.includes(role.value));
    } catch (e) {
      throw new UnauthorizedException('Role not found');
    }
  }
}
