import { Module } from '@nestjs/common';
import { UserRolesService } from './services/user-roles.service';
import { UserRolesController } from './controllers/user-roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoleRepository } from './repositories/user-role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleRepository])],
  controllers: [UserRolesController],
  providers: [UserRolesService]
})
export class UserRolesModule {}
