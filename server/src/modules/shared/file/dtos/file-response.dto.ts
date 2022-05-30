import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class FileResponseDto {
  @Expose()
  id: string;

  @Expose()
  path: string;

}