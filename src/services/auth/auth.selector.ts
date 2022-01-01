import { AppStateType } from "../redux.store";

export const getLoginStatus = (state: AppStateType) => state.auth.isLogined;
export const getAuthError = (state: AppStateType) => state.auth.error;
