
import React from "react";
import { createContext, useContext, useReducer, useMemo, useState } from "react";





//--------->

const ProductoContext = createContext();

export const useProducto = () => {
  return useContext(ProductoContext);
};

export const ProductoProvider = ({ children }) => {

  const initialProducto = useMemo(() => localStorage.getItem("producto") || "", []);
  //const [token, setToken] = useState(initialToken);
  const [producto, setProducto] = useState(initialProducto);

  const productoElegido = (newProducto) => {
    setProducto(newProducto);
    localStorage.setItem("producto", newProducto);
  };

  const limpiarProducto = () => {
    setProducto("");
    localStorage.removeItem("producto");
  };

  return <ProductoContext.Provider value={{ producto, productoElegido, limpiarProducto }}>{children}</ProductoContext.Provider>;
};

//-----

//--------->
const LoginContext = createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
  const initialLogin = useMemo(() => localStorage.getItem("usuario") || "", []);
  //const [token, setToken] = useState(initialToken);
  const [usuario, setUsuario] = useState(initialLogin);

  const login = (newUsuario) => {
    setUsuario(newUsuario);
    localStorage.setItem("usuario", newUsuario);
  };

  const logout = () => {
    setUsuario("");
    localStorage.removeItem("usuario");
  };

  return <LoginContext.Provider value={{ usuario, login, logout }}>{children}</LoginContext.Provider>;
};

//-----


