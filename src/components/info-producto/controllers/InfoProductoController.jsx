import { useEffect, useState } from "react";
import { InfoProducto } from "../modules/InfoProducto";
import { useProducto } from "../../../context";
import { getProductoPorId } from "../services/infoProductoService";

export function InfoProductoController() {
    const [expanded, setExpanded] = useState(false);
    const [infoProducto, setInfoProducto] = useState();
    const { producto, productoElegido, limpiarProducto } = useProducto();
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    useEffect(() => {
      if(producto.id !== "" && producto.id){
       const result = getProductoPorId(producto.id);
       setInfoProducto(result);
      }
      
    }, [])
  return <>
  <InfoProducto
  expanded={expanded}
  handleExpandClick={handleExpandClick}
  producto={producto}
  infoProducto={infoProducto}
  ></InfoProducto>
  </>;
}
