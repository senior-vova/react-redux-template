import React from "react";
import { Route, Routes } from "react-router";
import { HomePage, NotFoundPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={() => <HomePage />} />
      <Route path="*" element={() => <NotFoundPage />} />
    </Routes>
  );
}

export default App;
