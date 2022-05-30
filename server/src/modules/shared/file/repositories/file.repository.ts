import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateFileDto } from "../dtos/create-file.dto";
import { FilterFileDto } from "../dtos/filter-file.dto";
import { FileEntity } from "../entities/file.entity";

@EntityRepository(FileEntity)
export class FileRepository extends Repository<FileEntity> {

  findAll(filterFileDto: FilterFileDto): Promise<FileEntity[]> {
    const { category} = filterFileDto;

    const reqQuery: any = {};

    if(category) reqQuery.category = category;

    return this.find({
      where: reqQuery,
      // relations: ['permissions']
    });
  }
  
} 