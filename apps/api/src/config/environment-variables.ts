import Joi from 'joi';

export interface EnvironmentVariables {
  PORT: number;
  DATABASE_URL: string;
}

export const validationSchemaForEnv = Joi.object<EnvironmentVariables, true>({
  PORT: Joi.number().required(),
  DATABASE_URL: Joi.string().required(),
});
