import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { Users } from './users/users.entity';
import { Roles } from './roles/roles.entity';
import { RolesModule } from './roles/roles.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Posts } from './posts/posts.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [Users, Roles, Posts],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
