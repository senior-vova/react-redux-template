export enum ActionTypes {
  auth = "AUTH",
  signIn = "SIGN_IN",
  signUp = "SIGN_UP",
  logout = "LOGOUT",
  error = "ERROR",
}

export const AuthActions = {
  auth: () => ({ type: ActionTypes.auth }),
  signIn: () => ({ type: ActionTypes.signIn }),
  signUp: () => ({ type: ActionTypes.signUp }),
  logout: () => ({ type: ActionTypes.logout }),
  error: (msg: string) => ({ type: ActionTypes.error, payload: msg }),
};
