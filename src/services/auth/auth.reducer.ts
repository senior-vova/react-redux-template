import { Dispatch } from "redux";
import { AuthApi } from "./auth.api";
import {
  ActionType,
  ActionTypes,
  ISignIn,
  ISignUp,
  StateType,
} from "./auth.interface";
import { token } from "../../utils/localstorage.token";
import { AuthActions } from "./auth.actions";

const initialState: StateType = {
  isLogined: false,
  error: null,
};
type InitialState = typeof initialState;

export const AuthReducer = (
  state: StateType = initialState,
  action: ActionType
): InitialState => {
  switch (action.type) {
    case ActionTypes.auth:
      return { ...initialState, isLogined: true };
    case ActionTypes.signIn:
      return { ...initialState, isLogined: true };
    case ActionTypes.signUp:
      return { ...initialState, isLogined: true };
    case ActionTypes.error:
      return { ...initialState, error: action.msg };
    case ActionTypes.logout:
      return { ...initialState };
    default:
      return { ...state };
  }
};

export const Auth = () => async (dispatch: Dispatch) => {
  const data = await AuthApi.auth();
  if (data.error) {
    dispatch(AuthActions.error(data.error));
  } else {
    dispatch(AuthActions.auth());
  }
};

export const SignIn = (body: ISignIn) => async (dispatch: Dispatch) => {
  const data = await AuthApi.signIn(body);
  if (data.error) {
    dispatch(AuthActions.error(data.error));
  } else {
    dispatch(AuthActions.signIn());
  }
};

export const SignUp = (body: ISignUp) => async (dispatch: Dispatch) => {
  const data = await AuthApi.signUp(body);
  if (data.error) {
    dispatch(AuthActions.error(data.error));
  } else {
    dispatch(AuthActions.signUp());
  }
};

export const Logout = () => async (dispatch: Dispatch) => {
  token.clear();
  dispatch(AuthActions.logout());
};
