import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import store from "../services/redux.store";

export const MainAppHoc = (Component: React.FC) => (props: any) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </BrowserRouter>
  );
};
