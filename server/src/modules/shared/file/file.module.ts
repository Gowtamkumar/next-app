import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileController } from './controllers/file.controller';
import { FileRepository } from './repositories/file.repository';
import { FileService } from './services/file.service';

@Module({
  imports: [TypeOrmModule.forFeature([FileRepository])],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService]
})
export class FileModule {}
