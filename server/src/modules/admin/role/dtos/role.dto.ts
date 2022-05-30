import { Expose } from "class-transformer";

export class RoleDto {

  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  color: string;

  @Expose()
  note: string;

  @Expose()
  isActive: boolean

}