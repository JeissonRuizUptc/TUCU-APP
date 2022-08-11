import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/global.scss';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Start from "../pages/Start";
import StartMap from "../pages/StartMap";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/Start" element={<Start/>} />
          <Route exact path="/Start/Map" element={<StartMap/>} />
          <Route exact path="/NotFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}
export default App;


