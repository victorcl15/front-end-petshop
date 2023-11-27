import { useState, useEffect } from "react";
import Login from "../modules/Login.jsx";
import { getLogin } from "../services/loginService";
import { useLogin } from "../../../context";
import { Navigate, useNavigate } from "react-router-dom";

export function LoginController() {
  return <>
    <Login></Login>
  </>;
}