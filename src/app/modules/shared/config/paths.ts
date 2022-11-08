import { environment } from "@environment"

export const ENVIRONMENT_DEV = {
  IP_DEFAULT : 'https://jsonplaceholder.typicode.com/'
}

export const ENVIRONMENT_PROD = {
  IP_DEFAULT : ''
}

export const PATHS = {

  // posts

  GET_POSTS : 'posts',
  SAVE_POST : 'posts',
}


export function IDENTITY_ENVIRONMENT() : string {
  if( environment.production )
    return ENVIRONMENT_PROD.IP_DEFAULT;
  else
    return ENVIRONMENT_DEV.IP_DEFAULT;
}
