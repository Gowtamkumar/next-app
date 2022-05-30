import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { QueryFailedErrorFilter } from './common/filters/query-failed-error.filter';
import { initializeTransactionalContext, patchTypeORMRepositoryWithBaseRepository, } from 'typeorm-transactional-cls-hooked';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { FrontendFunMiddleware } from './common/middleware/front-end-middlare';

async function bootstrap() {
  
  initializeTransactionalContext();
  patchTypeORMRepositoryWithBaseRepository();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  if(process.env.NODE_ENV === 'production'){
    // app.use()
    app.useStaticAssets(join(__dirname, '../../client/build'));
    app.use(FrontendFunMiddleware);
  }

  const configService = app.get(ConfigService);

  app.use(cookieParser());
  
  
  app.setGlobalPrefix(configService.get('API_PREFIX'));
  
  app.use(compression());
  
  const reflector = app.get(Reflector);
  
  app.useGlobalFilters(
    new HttpExceptionFilter(reflector),
    new QueryFailedErrorFilter(reflector),
    );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      skipUndefinedProperties: true
    })
  );


  const port = configService.get('API_PORT') || 3000;
  
  console.log(configService.get('NODE_ENV'))
  console.log(configService.get('API_PORT'));


  
  await app.listen(port);
}

bootstrap();
