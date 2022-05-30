import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { RoleEntity } from "../../role/entities/role.entity";
import { UserEntity } from "../../user/entities/user.entity";


@Entity('user_roles')
export class UserRoleEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "user_id", type: 'uuid', nullable: true })
  userId: string;

  @Column({ name: 'role_id', type: 'uuid', nullable: true })
  roleId: string;

  // @ManyToMany(_type => RoleEntity, roles => roles.userRoles)
  // @JoinTable()
  // roles: RoleEntity[]

  // @ManyToMany(_type => UserEntity, users => users.userRoles, {eager: true})
  // @JoinTable()
  // users: UserEntity[]

}
