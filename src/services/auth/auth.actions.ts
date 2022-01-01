import { ActionTypes } from "./auth.interface";

export const AuthActions = {
  auth: () => ({ type: ActionTypes.auth }),
  signIn: () => ({ type: ActionTypes.signIn }),
  signUp: () => ({ type: ActionTypes.signUp }),
  logout: () => ({ type: ActionTypes.logout }),
  error: (msg: string) => ({ type: ActionTypes.error, msg }),
};
