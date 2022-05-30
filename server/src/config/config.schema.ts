import * as Joi from 'joi';
import { Environment } from '../common/enums/environment.enum';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid(Environment.Development,Environment.Test, Environment.Production).required(),
  API_PORT: Joi.number().default(3900).required(),
  API_PREFIX: Joi.string().default('api').required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required()
});