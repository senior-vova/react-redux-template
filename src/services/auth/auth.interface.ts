export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export type StateType = {
  isLogined: boolean;
  error: string | null;
};

export enum ActionTypes {
  auth = "AUTH",
  signIn = "SIGN_IN",
  signUp = "SIGN_UP",
  logout = "LOGOUT",
  error = "ERROR",
}

export type ActionType = {
  type: string;
  msg: string | null;
};
