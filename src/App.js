import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  //Listado de productos
  const [productos, setProducto] = useState([
    {
      idProducto: "A",
      codigoProductoProd: 1001,
      nombreProducto: "Estancia Mza Malbec 750 ML",
      precioUnitario: 320.0,
      litrosXUnidad: 0.75
    },
    {
      idProducto: "B",
      codigoProductoProd: 2002,
      nombreProducto: "Canciller Red Blend 1125 ML",
      precioUnitario: 280.0,
      litrosXUnidad: 1.125
    },
    {
      idProducto: "C",
      codigoProductoProd: 3003,
      nombreProducto: "Barcelona Malbec 750 ML",
      precioUnitario: 425.0,
      litrosXUnidad: 0.75
    }
  ]);

  //Listado de ventas
  const [ventas, setVentas] = useState([
    {
      idVenta: 1,
      codigoProductoVta: 1001,
      cantidadVendida: 6,
      fechaVenta: new Date("2023-03-14")
    },
    {
      idVenta: 2,
      codigoProductoVta: 2002,
      cantidadVendida: 15,
      fechaVenta: new Date("2023-03-15")
    },
    {
      idVenta: 3,
      codigoProductoVta: 1001,
      cantidadVendida: 20,
      fechaVenta: new Date("2023-03-30")
    },
    {
      idVenta: 4,
      codigoProductoVta: 3003,
      cantidadVendida: 10,
      fechaVenta: new Date("2023-03-07")
    },
    {
      idVenta: 5,
      codigoProductoVta: 2002,
      cantidadVendida: 35,
      fechaVenta: new Date("2023-02-13")
    },
    {
      idVenta: 6,
      codigoProductoVta: 1001,
      cantidadVendida: 8,
      fechaVenta: new Date("2023-02-25")
    }
  ]);

  return (
    //componente principal
    <Fragment>
      <h1>Reporte de Ventas</h1>
      <h3>Fecha de ventas entre 02/2023 al 03/2023</h3>
      <Formulario productos={productos} ventas={ventas} />
    </Fragment>
  );
}

export default App;
