import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import GlobalLayout from "./components/layout/Layout";
import ForgetPassword from "./pages/ForgetPassword" 

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GlobalLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
