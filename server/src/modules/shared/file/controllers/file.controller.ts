import { Body, Controller, Delete, Get, Logger, NotFoundException, Param, ParseUUIDPipe, Patch, Post, Put, Query, Req, Res, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateFileDto } from '../dtos/create-file.dto';
import { FilterFileDto } from '../dtos/filter-file.dto';
import { FileResponseDto } from '../dtos/file-response.dto';
import { UpdateFileDto } from '../dtos/update-file.dto';
import { FileEntity } from '../entities/file.entity';
import { FileService } from '../services/file.service';
import { AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
// import { RequestContext } from '@common/decorators/request-context.decorator';
// import { RequestContextDto } from '@common/dtos/request-context.dto';
// import { JwtAuthGuard } from '@admin/auth/guards';
import { Express } from 'express';

import 'multer'
import { join } from 'path';
import { of } from 'rxjs';

import { FileTypeEnum } from '@common/enums/file-type.enum';
// import { CustomMulterOptions } from 'src/config/multer.config';
import { BaseApiSuccessResponse } from '@common/dtos/base-api-response.dto';
import { CustomMulterOptions } from 'src/config/multer.config';

// export const fieldTypes = [
//   { name: 'avatar', maxCount: 1 },
//   { name: 'photo', maxCount: 1 },
//   { name: 'signature', maxCount: 1 },
//   { name: 'nid', maxCount: 1 },
//   { name: 'birth_certificate', maxCount: 1 },
//   { name: 'kyc', maxCount: 1 },
//   { name: 'license', maxCount: 1 },
//   { name: 'contact', maxCount: 1 },
//   { name: 'other', maxCount: 1 },
// ]

// @UseGuards(JwtAuthGuard)
@Controller('files')
// @Serialize(FileResponseDto)
export class FileController {
  private logger = new Logger('FileController');

  constructor(private fileService: FileService) { }


  @Get('/')
  getFiles(
    // @RequestContext() ctx: RequestContextDto,
    @Query() filterFileDto: FilterFileDto
  ): Promise<FileEntity[]> {
    // this.logger.verbose(`User "${ctx.user.username}" retieving all Files. Query: ${JSON.stringify(filterFileDto)}`);
    return this.fileService.getFiles(filterFileDto);
  }


  @Get('/:id')
  getFile(
    // @RequestContext() ctx: RequestContextDto,
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<FileEntity> {
    // this.logger.verbose(`User "${ctx.user.username}" retieving uesr File info. of Id: ${id}`);
    return this.fileService.getFile(id);
  }

  @UseInterceptors(FileFieldsInterceptor([
    { name: 'avatar', maxCount: 1 },
    { name: 'photo', maxCount: 1 },
    { name: 'signature', maxCount: 1 },
    { name: 'doc', maxCount: 1 },
    { name: 'doc-front', maxCount: 1 },
    { name: 'doc-back', maxCount: 1 },
  ], CustomMulterOptions.getConfig(FileTypeEnum.ANY)))
  @Post('/')
  async createFile(
    // @RequestContext() ctx: RequestContextDto,
    @UploadedFiles() files: {
      avatar?: Express.Multer.File[],
      photo?: Express.Multer.File[],
      signature?: Express.Multer.File[],
      nid?: Express.Multer.File[],
      birth_certificate?: Express.Multer.File[],
      kyc?: Express.Multer.File[],
      license?: Express.Multer.File[],
      contact?: Express.Multer.File[],
      other?: Express.Multer.File[]
    },
    @Body() createFileDto: CreateFileDto
  ): Promise<BaseApiSuccessResponse<FileResponseDto[]>> {
    // this.logger.verbose(`User "${ctx.user.username}" creating a File. Data: ${JSON.stringify(createFileDto)}`);

    const rfiles = await this.fileService.createFile(files, createFileDto);

    return {
      success: true,
      statusCode: 'Document-200',
      message: `listof created files`,
      data: rfiles
    }
  }


  @Put('/:id')
  updateFile(
    // @RequestContext() ctx: RequestContextDto,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateFileDto: UpdateFileDto
  ): Promise<FileEntity> {
    // this.logger.verbose(`User "${ctx.user.username}" updating File of id #${id}. Data: ${JSON.stringify(updateFileDto)}`);
    return this.fileService.updateFile(id, updateFileDto);
  }

  @Patch('/update-many')
  updatemanyFile(
    // @RequestContext() ctx: RequestContextDto,
    @Query('filenames') filenames: string[],
    @Body() updateFileDto: UpdateFileDto
  ) {
    // this.logger.verbose(`User "${ctx.user?.username}" updating many files.`);

    console.log(typeof JSON.parse(filenames + ''));

    // return this.fileService.updateManyFile(ctx, JSON.parse(filenames + ''), updateFileDto);
  }

  @Delete('/:id')
  deleteFile(
    // @RequestContext() ctx: RequestContextDto,
    @Param('id', ParseUUIDPipe) id: string
  ): Promise<FileEntity> {
    // this.logger.verbose(`User "${ctx.user.username}" deleting a File. of id: ${id}`);
    return this.fileService.deleteFile(id);
  }



  // UPLOAD FILES

  @UseInterceptors(FileInterceptor('file', CustomMulterOptions.getConfig(FileTypeEnum.ANY)))
  @Post('/upload/single')
  uploadFile(
    // @RequestContext() ctx: RequestContextDto,
    @UploadedFile() file: Express.Multer.File,
    // @Body() createFileDto: CreateFileDto
  ) {
    // this.logger.verbose(`User "${ctx.user.username}" creating a File.`);

    console.log(file);

    return file;
  }

  @UseInterceptors(FilesInterceptor('files', +process.env.MAX_FILE_COUNTS || 7, CustomMulterOptions.getConfig(FileTypeEnum.ANY)))
  @Post('/upload/multiple')
  uploadFiles(
    // @RequestContext() ctx: RequestContextDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
    // @Body() createFileDto: CreateFileDto
  ) {
    // this.logger.verbose(`User "${ctx.user.username}" creating a File`);

    // console.log(files);

    return files;
  }


  // recomanded
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'avatar', maxCount: 1 },
    { name: 'photo', maxCount: 1 },
    { name: 'signature', maxCount: 1 },
    { name: 'doc', maxCount: 1 },
    { name: 'doc-front', maxCount: 1 },
    { name: 'doc-back', maxCount: 1 }
  ], CustomMulterOptions.getConfig(FileTypeEnum.ANY)))
  @Post('/uploads')
  async uploadMultipleFile(
    // @RequestContext() ctx: RequestContextDto,
    @UploadedFiles() files: {
      avatar?: Express.Multer.File[],
      photo?: Express.Multer.File[],
      signature?: Express.Multer.File[],
      nid?: Express.Multer.File[],
      birth_certificate?: Express.Multer.File[],
      kyc?: Express.Multer.File[],
      license?: Express.Multer.File[],
      contact?: Express.Multer.File[],
      other?: Express.Multer.File[]
    }
  ) {
    // this.logger.verbose(`User "${ctx.user?.username}" creating a File.`);

    await this.fileService.createManyFile(files);

    return files;
  }




  @Get('upload/:imagename')
  findImage(
    // @RequestContext() ctx: RequestContextDto,
    @Param('imagename') imagename, @Res() res) {
    // this.logger.verbose(`User "${ctx}" single photo get.`);

    return of(res.sendFile(join(process.cwd(), 'public/uploads/' + imagename)));
  }



  @UseInterceptors(AnyFilesInterceptor())
  @Post('/upload/any')
  uploadAnyFile(
    // @RequestContext() ctx: RequestContextDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
    // @Body() createFileDto: CreateFileDto
  ) {
    // this.logger.verbose(`User "${ctx.user.username}" creating a File.`);

    console.log(files);

    return files;
  }

}
