import { ILoginModel } from './ILoginModel';

export class LoginModel implements ILoginModel {
  emailAddress: string = '';
  password: string = '';
}
