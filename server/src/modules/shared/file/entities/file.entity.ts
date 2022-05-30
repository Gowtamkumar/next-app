import { AfterInsert, Entity, Column, PrimaryGeneratedColumn, AfterUpdate, AfterRemove, OneToMany, ManyToOne, JoinColumn } from "typeorm";

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // member picture, member signature, member nid, birth_certificate admission form, loan proposal, contact, kyc, trade liscence, other
  // @Column({nullable: true})
  // type: string;

  // // front, back
  // @Column({nullable: true})
  // tag: string;

  // 6 ta
  @Column()
  fieldname: string; // Photo, Signature, etc

  @Column({nullable: true})
  originalname: string; // Photo, Signature, etc

  @Column({nullable: true})
  encoding: string;

  @Column({nullable: true})
  mimetype: string;

  @Column({ nullable: true })
  destination: string;

  @Column({nullable: true})
  filename: string;

  @Column({ nullable: true })
  path: string;

  @Column({nullable: true})
  size: number;


  @Column({ name: 'is_active', default: false })
  isActive: boolean;


  @Column({name: 'employee_id', type: 'uuid', nullable: true})
  employeeId: string;

  
  // Relations

  // hooks
  @AfterInsert()
  logInsert(){
    console.log(`Inserted File with id: ${this.id}`);
  }

  @AfterUpdate()
  logUpdate(){
    console.log(`Updated File with id: ${this.id}`);
  }

  @AfterRemove()
  logRemove(){
    console.log(`Removed File with id: ${this.id}`);
  }
}