import { Expose } from "class-transformer";

export class UserDto {

  @Expose()
  id: string

  @Expose()
  username: string;

  // @Expose()
  password: string;

  // @Expose()
  // staffId: string;

  // @Expose()
  // patientId: string;

  // @Expose()
  // memberId: string;

  @Expose()
  userType: string;

  @Expose()
  roles: string[];

  @Expose()
  isActive: boolean
}