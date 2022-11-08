import { environment } from "@environment"

export const ENVIRONMENT_DEV = {
  // IP_DEFAULT : 'https://mdn.mocklab.io/'
  IP_DEFAULT : 'http://demo4294298.mockable.io/'
}

export const ENVIRONMENT_PROD = {
  IP_DEFAULT : ''
}

export const BASE_URL = 'api/mdn/';
export const PATHS = {



  // Entidades

  GET_ENTITYS_PUBLICS : BASE_URL + 'entitys',

  // Autenticación

  POST_AUTHENTICATION : BASE_URL + 'authentication',

  // Users

  GET_ALL_USERS : BASE_URL + 'allUsers',
  POST_SAVE_USER : BASE_URL + 'saveUser',
  UPDATE_USER : BASE_URL + 'updateUser/${id}',

  // parametros

  GET_ALL_PARAMETERS : BASE_URL + 'allParamsAndSubparams',
  SAVE_PARAMETER : BASE_URL + 'saveParameter',
  SAVE_SUB_PARAMETER : BASE_URL + 'saveSubParameter',
  UPDATE_SUB_PARAMETER : BASE_URL + 'updateSubParameter/{idSubParametro}',
  GET_POWER_BI: BASE_URL + 'getPowerBI',

  // Secuencia

  GET_SEQUENCE_BY_ENTITY : BASE_URL + 'secuence/${idEntity}'
}


export function IDENTITY_ENVIRONMENT() : string {
  if( environment.production )
    return ENVIRONMENT_PROD.IP_DEFAULT;
  else
    return ENVIRONMENT_DEV.IP_DEFAULT;
}
