import { Expose } from "class-transformer";

export class ModuleDto {

  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  note: string;

  @Expose()
  add: string;

  @Expose()
  view: string;

  @Expose()
  delete: string;
}