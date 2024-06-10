import 'dotenv/config';
import * as joi from 'joi';

//como lucen nuestras variabeks de entorno
interface EnvVars {
  PORT: number;
  HOST_DATABASE: string;
  PORT_DATABASE: number;
  USER_DATABASE: string;
  PASS_DATABASE: string;
  NAME_DATABASE: string;
}

//validador de esquema
const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    HOST_DATABASE: joi.string().required(),
    PORT_DATABASE: joi.string().required(),
    USER_DATABASE: joi.string().required(),
    PASS_DATABASE: joi.string().required(),
    NAME_DATABASE: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error : ${error.message}`);
}

const envVars: EnvVars = value;

//exportamos las variables de entorno
export const envs = {
  port: envVars.PORT,
  hostDB: envVars.HOST_DATABASE,
  portDB: envVars.PORT_DATABASE,
  userDB: envVars.USER_DATABASE,
  passDB: envVars.PASS_DATABASE,
  nameDB: envVars.NAME_DATABASE,
};
