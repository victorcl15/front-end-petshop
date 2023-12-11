import { useNavigate } from "react-router-dom";
import RegisterUser from "../modules/RegisterUser";

export function RegisterUserController() {
  const Navigate = useNavigate();

  const handleIrHome = () => {
    Navigate("/home");
  };

  return (
    <>
      <RegisterUser></RegisterUser>
    </>
  );
}
