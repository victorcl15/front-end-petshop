import { useEffect, useState } from "react";
import { PortalWeb } from "../modules/PortalWeb";
import { getProductos } from "../services/PortalWebService";
import { useProducto } from "../../../context";
import { Navigate, useNavigate } from "react-router-dom";

export function PortalWebController() {
    const Navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const { producto, productoElegido, limpiarProducto } = useProducto();
  const requestProductos = async () => {

    const arrayProductos = await getProductos();
    console.log(arrayProductos);
    setProductos(arrayProductos);
  };

  const irInfoProducto = (e) => {
    e.preventDefault();
    const { dataset } = e.currentTarget;
    const data = {
        id: dataset.productoid,
        nombre: dataset.nombre,
        descripcion: dataset.descripcion,
        precio: dataset.precio,
        stock: dataset.stock,
        img: dataset.img,
        usuario: dataset.usuario,
        categoria: dataset.categoria,
      };
productoElegido(data);

if(producto && producto!==""){
    Navigate("/producto");
}
console.log(data);
  }
  useEffect(() => {
    requestProductos();
  }, []);
  return (
    <>
      <PortalWeb productos={productos} irInfoProducto={irInfoProducto}></PortalWeb>
    </>
  );
}