import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RolseUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userID: string;

  @Column()
  roleID: string;
}