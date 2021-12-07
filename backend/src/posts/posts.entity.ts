import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn, ManyToOne,
} from 'typeorm';
import { Users } from '../users/users.entity';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  article: string;

  @Column({ default: '' })
  image: string;

  @ManyToOne(() => Users, (user) => user.posts)
  user: Users;

  @UpdateDateColumn()
  updatedDate: Date;

  @CreateDateColumn()
  createdDate: Date;
}
