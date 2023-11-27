import * as React from 'react';
import "./App.css";
import NavBarIndex from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import { LoginController } from './components/login/controllers/LoginController';
import Portal from "./components/portal-web"
import InfoProductoIndex from "./components/info-producto"

function App() {
  
  return (
    <>
    <Routes>
        <Route element={<LoginController />} path='/' />
        <Route path="/home" element={<Portal />} />
        <Route path="/producto" element={<InfoProductoIndex />} />
      </Routes>
    </>
  );
}

export default App;
