import React, { useState } from "react";

const Formulario = ({ productos, ventas }) => {
  const [busqueda, setBusqueda] = useState(false);
  //const [reporteVentas, setReporteVentas] = useState();
  const { idProducto, fechaIni, fechaFin } = busqueda;
  //const { ventaTotal, importeTotalVentas, litrosTotalesVendidos} = reporteVentas;

  const [resultado, setResultado] = useState("");
  const { ventaTotal, importeTotalVentas, litrosTotalesVendidos } = resultado;

  //Carga parametros del select
  const handleChangeProd = (e) => {
    // actualizar el State
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  //Carga parametros de Fechas
  const handleChangeDate = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: new Date(e.target.value)
    });
  };

  //Funcion principal
  const generarReporte = (e) => {
    //Filtra Tabla productos y comprueba el id con el id pasado por el usuario
    const producto = productos.filter(
      (producto) => producto.idProducto === busqueda.idProducto
    )[0];
    //Filtra producto que corresponda el id con el Codigo de producto y que se encuentre dentro de las fechas solicitadas
    const ventasProd = ventas.filter(
      (venta) =>
        venta.codigoProductoVta === producto.codigoProductoProd &&
        venta.fechaVenta >= busqueda.fechaIni &&
        venta.fechaVenta <= busqueda.fechaFin
    );

    resultado.ventaTotal = 0;

    //Se buscan las cantidades vendidas de el producto seleccionado y se cuentan en una variable
    for (var i = 0; i < ventasProd.length; i++) {
      resultado.ventaTotal =
        resultado.ventaTotal + ventasProd[i].cantidadVendida;
    }

    //Se calcula el precio y los litros de la cantidad de ventas
    resultado.importeTotalVentas =
      resultado.ventaTotal * producto.precioUnitario;
    resultado.litrosTotalesVendidos =
      resultado.ventaTotal * producto.litrosXUnidad;

    //Muestra por consola los resultados
    console.log(ventaTotal);
    console.log(importeTotalVentas);
    console.log(litrosTotalesVendidos);

    setResultado({
      ...resultado,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <label>Ingrese Id Producto </label>
      <br />
      <br />
      <select
        name="idProducto"
        id="idProducto"
        value={idProducto}
        onChange={handleChangeProd}
      >
        <option value="">---Seleccione Id---</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>

      <input
        type="date"
        id={fechaIni}
        name="fechaIni"
        onChange={handleChangeDate}
      />

      <input
        type="date"
        id={fechaFin}
        name="fechaFin"
        onChange={handleChangeDate}
      />

      <button type="button" onClick={generarReporte}>
        Consultar
      </button>

      <p>Ventas por unidad: {ventaTotal}</p>
      <p>Cantidad total vendida: ${importeTotalVentas} </p>
      <p>Litros totales vendidos: {litrosTotalesVendidos} </p>
    </form>
  );
};

export default Formulario;
