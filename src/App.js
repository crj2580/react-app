import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.less";
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Admin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
