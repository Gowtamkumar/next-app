import { Transform } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class FilterFileDto {
  category: string
}