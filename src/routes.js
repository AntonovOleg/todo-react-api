import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Main from "./Component/Main.jsx";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact component={<Main />} />
      {/* <Navigate to="/" /> */}
    </Routes>
  )
}
