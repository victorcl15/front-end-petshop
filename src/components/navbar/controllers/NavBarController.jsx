import { useState } from "react";
import { NavBar } from "../modules/NavBar";
import { useNavigate } from "react-router-dom";

export function NavBarController() {
  const Navigate = useNavigate();
  const pages = ["Home", "Vendedor", "Portal"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);

  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    console.log("hola")
    const {dataset} = e.currentTarget;
    console.log(dataset.name)
    if(dataset.name === "Vendedor")
    Navigate("/gestion_producto");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleIrGestionProducto = (e) => {
    e.preventDefault();
    const {dataset} = e.currentTarget;
    console.log(dataset.name)
  }
  return (
    <>
      <NavBar
        pages={pages}
        settings={settings}
        anchorElNav={anchorElNav}
        anchorElUser={anchorElUser}
        handleOpenNavMenu={handleOpenNavMenu}
        handleOpenUserMenu={handleOpenUserMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        handleCloseUserMenu={handleCloseUserMenu}
        handleIrGestionProducto={handleIrGestionProducto}
      ></NavBar>
    </>
  );
}
