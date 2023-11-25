import { useState } from "react";
import { InfoProducto } from "../modules/InfoProducto";
import { useProducto } from "../../../context";

export function InfoProductoController() {
    const [expanded, setExpanded] = useState(false);
    const { producto, productoElegido, limpiarProducto } = useProducto();
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  return <>
  <InfoProducto
  expanded={expanded}
  handleExpandClick={handleExpandClick}
  producto={producto}
  ></InfoProducto>
  </>;
}
