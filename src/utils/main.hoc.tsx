import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "../services/redux.store";

export const MainAppHoc = (Component: React.FC) => (props: any) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </HashRouter>
  );
};
