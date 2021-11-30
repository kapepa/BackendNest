import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Roles } from '../roles/roles.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  banned: boolean;

  @Column({ default: '' })
  banReason: string;

  @ManyToMany(() => Roles, (roles) => roles.user)
  @JoinTable({
    name: 'users_roles',
    joinColumn: {
      name: 'usersId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'rolesId',
      referencedColumnName: 'id',
    },
  })
  roles: Roles[];

  @UpdateDateColumn()
  updatedDate: Date;

  @CreateDateColumn()
  createdDate: Date;
}
