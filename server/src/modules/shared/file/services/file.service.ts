import { Injectable, NotFoundException, UnauthorizedException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In } from 'typeorm';
import { CreateFileDto } from '../dtos/create-file.dto';
import { FilterFileDto } from '../dtos/filter-file.dto';
import { UpdateFileDto } from '../dtos/update-file.dto';
import { FileEntity } from '../entities/file.entity';
import { FileRepository } from '../repositories/file.repository';
import fs from 'fs';

@Injectable()
export class FileService {
  private logger = new Logger(FileService.name);

  constructor(
    @InjectRepository(FileRepository) private fileRepo: FileRepository
  ) { }

  getFiles(filterFileDto: FilterFileDto): Promise<FileEntity[]> {
    return this.fileRepo.findAll(filterFileDto);
  }

  async getFile(id: string): Promise<FileEntity> {
    const file: FileEntity = await this.fileRepo.findOne(id)
    if (!file) {
      throw new NotFoundException(`File of id#${id} not found.`);
    }
    return file;
  }

  findFileByFilename(filename: string): Promise<FileEntity> {
    return this.fileRepo.findOne({ filename })
  }

  // upload and update file
  async createFile(files, createFileDto: CreateFileDto): Promise<FileEntity[]> {
    const createFileDtos = [];
    const deleteQueries: any = [];
    // console.log("MMMMMMMm", files, createFileDto);

    Object.entries(files).forEach(([fieldname, filesArr]) => {
      // console.log("AAAAAAAAA", fieldname, filesArr);
      const newFiles: any = filesArr;
      newFiles.forEach(file => {
        const { fieldname, filename, mimetype, size } = file;
        deleteQueries.push({ fieldname, ...createFileDto });
        createFileDtos.push({ ...file, ...createFileDto });
      })
    })

    const oldFiles = await this.fileRepo.find({ where: deleteQueries });
    // console.log("Old Files", oldFiles);
    await this.fileRepo.delete({ id: In(oldFiles.map(file => file.id)) });

    // this.fileRepo.remove(file);

    const newfiles = this.fileRepo.create(createFileDtos);
    await this.fileRepo.save(newfiles);

    oldFiles.forEach(file => {
      try {
        fs.unlinkSync(file.path);
      }
      catch (err) {
        console.log(err);
      }
    })


    return newfiles;
  }


  createManyFile( files): Promise<FileEntity[]> {
    const createFileDtos = [];

    Object.entries(files).forEach(([fieldname, filesArr]) => {
      // console.log("AAAAAAAAA", fieldname, filesArr);
      // createFileDtos = [ ...createFileDtos, filesArr ];
      const newFiles: any = filesArr;
      createFileDtos.push(...newFiles);
      // newFiles.forEach(file => {
      //   const { fieldname, filename, mimetype, size } = file;
      //   createFileDtos.push({fieldname, filename, mimetype, size});
      // })
    });

    const newfiles = this.fileRepo.create(createFileDtos);
    return this.fileRepo.save(newfiles);
  }

  async updateFile(id: string, updateFileDto: UpdateFileDto): Promise<FileEntity> {
    const file = await this.getFile(id);
    Object.assign(file, updateFileDto);
    return this.fileRepo.save(file);
  }


  async updateManyFile( filenames: string[], updateFileDto: UpdateFileDto): Promise<any> {
    this.logger.log(`${this.updateManyFile.name} Called`)

    const files = await this.fileRepo
      .createQueryBuilder('file')
      .update()
      .set(updateFileDto)
      .where("filename IN(:...filenames)", { filenames })
      // .where("id = :id", { id: 1 })
      .returning('id, fieldname, filename')
      .execute();

    return files;
  }

  async deleteFile(id: string): Promise<FileEntity> {
    const file = await this.getFile(id);
    try {
      fs.unlinkSync(file.path);
    }
    catch (err) {
      console.log(err);
    }
    return this.fileRepo.remove(file);
  }

}
