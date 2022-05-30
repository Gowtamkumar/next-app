import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Environment } from '@common/enums/environment.enum';
import { AdminModule } from '@admin/admin.module';
import { RoleModule } from '@admin/role/role.module';
import { ModuleModule } from '@modules/module/module.module';
import { UserRolesModule } from '@admin/user-roles/user-roles.module';
import { IncomeModule } from '@modules/income/income.module';
import { ExpenseModule } from '@modules/expense/expense.module';
import { configValidationSchema } from './config/config.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    AdminModule,
    RoleModule,
    ModuleModule,
    UserRolesModule,
    IncomeModule,
    ExpenseModule,


    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validationSchema: configValidationSchema,
    }),


    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const isProduction = configService.get('NODE_ENV') === Environment.Production;
        return {
          ssl: isProduction,
          extra: {
            ssl: isProduction ? { rejectUnauthorized: false } : null,
          },
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: +configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          autoLoadEntities: true,
          synchronize: !isProduction,
        }
      },
    }),


  ],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule { }
