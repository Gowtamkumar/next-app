import { Expose, Type } from "class-transformer";
import { UserDto } from "../../user/dtos/user.dto";

export class UserRoleDto {

  @Expose()
  id: string;

  @Expose()
  userId: string;

  @Expose()
  roleId: string;

 
}