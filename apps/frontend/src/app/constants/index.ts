export const USER_REGEX = /^[a-zA-Z0-9]+$/;
export const PWD_REGEX = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
export const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export enum FORM_ERROR_MESSAGES {
  required = 'Required',
  pattern = 'Incorrect format',
}
