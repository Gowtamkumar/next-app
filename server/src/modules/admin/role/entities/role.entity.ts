import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserRoleEntity } from "../../user-roles/entities/user-role.entity";
import { UserEntity } from "../../user/entities/user.entity";

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  note: string;

  @Column({ nullable: true })
  color: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  // @ManyToMany(_type => UserRoleEntity, userRoles => userRoles.roles)
  // @JoinTable()
  // userRoles: UserRoleEntity[]


}