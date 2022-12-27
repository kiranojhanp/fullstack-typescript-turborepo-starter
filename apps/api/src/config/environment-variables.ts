import Joi from 'joi';

export interface EnvironmentVariables {
  PORT: string;
  DATABASE_URL: string;
}

export const validationSchemaForEnv = Joi.object<EnvironmentVariables, true>({
  PORT: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),
});
