
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RoleEntity } from "../../role/entities/role.entity";
import { UserRoleEntity } from "../../user-roles/entities/user-role.entity";

@Entity('users')
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // @Column({ name: 'staff_id', type: 'uuid', nullable: true })
  // staffId: string;

  // @Column({ name: 'patient_id', type: 'uuid', nullable: true })
  // patientId: string;

  // @Column({ name: 'member_id', type: 'uuid', nullable: true })
  // memberId: string;

  @Column({ name: 'user_type' })
  userType: string;

  @Column({ type: 'simple-array', nullable: true })
  roles: string[];

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  // @OneToOne(_type => StaffEntity, staff => staff.user, { eager: true })
  // @JoinColumn({ name: 'staff_id' })
  // staff: StaffEntity

  // @OneToOne(_type => PatientEntity, patient => patient.user, { eager: true })
  // @JoinColumn({ name: 'patient_id' })
  // patient: PatientEntity

  // @OneToOne(_type => MemberEntity, member => member.user, { eager: true })
  // @JoinColumn({ name: 'member_id' })
  // member: MemberEntity

  // @ManyToMany(_type => UserRoleEntity, userRoles => userRoles.users)
  // @JoinTable()
  // userRoles: UserRoleEntity[]




}