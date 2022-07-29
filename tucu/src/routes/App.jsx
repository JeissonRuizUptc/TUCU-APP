import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/global.scss';
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import FormLogin from "../components/FormLogin";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<FormLogin />} />
          <Route exact path="/NotFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App;
