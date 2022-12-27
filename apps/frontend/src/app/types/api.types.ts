import { IUser } from '@features/users/types';

export interface IGenericResponse {
  success: boolean;
  message: string;
}

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  expiresIn: string;
  user: IUser;
}

export interface IRegisterRequest {
  username: string;
  password: string;
  email: string;
}
