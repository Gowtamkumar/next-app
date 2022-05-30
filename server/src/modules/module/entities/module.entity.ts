import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('modules')

export class ModuleEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  note: string;

  @Column({ nullable: true })
  add: string;

  @Column({ nullable: true })
  edit: string;

  @Column({ nullable: true })
  view: string;

  @Column({ nullable: true })
  delete: string;
}