import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import path, { extname } from 'path';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express/multer';
import { v4 as uuidv4 } from 'uuid';
import { FileTypeEnum } from '@common/enums/file-type.enum';


@Injectable()
export class CustomMulterOptions implements MulterOptionsFactory {
  createMulterOptions(): MulterModuleOptions {
    return {
      dest: process.env.UPLOAD_PATH || 'public/uploads',
    };
  }



  static getConfig(filesAllowed: FileTypeEnum) {
    return {
      // Enable file size limits
      limits: {
        fileSize: +process.env.MAX_FILE_SIZE * 1024 * 1024, // 30mb = 30000000
      },
      // checkFileType: Check the mimetypes to allow for upload
      fileFilter: (req: any, file: any, cb: any) => {
        if (file.mimetype.match(`/(${filesAllowed})$`)) {
          cb(null, true);
        } else {
          cb(new HttpException(`Unsupported file type ${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
        }
      },


      // Storage properties
      storage: diskStorage({
        // Destination storage path details
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = process.env.UPLOAD_PATH || 'public/uploads';
          // Create folder if doesnt exist
          if (!existsSync(uploadPath)) {
            mkdirSync(uploadPath);
          }
          cb(null, uploadPath);
        },
        filename: function (req: any, file: any, cb: any) {
          console.log("path", extname)
          // const imageName = file.fieldname + '-' + uuidv4() + path.extname(file.originalname);
          const imageName = file.fieldname + '-' + uuidv4() + extname(file.originalname);
          cb(null, imageName);
        }
      }),
    };
  }
}
