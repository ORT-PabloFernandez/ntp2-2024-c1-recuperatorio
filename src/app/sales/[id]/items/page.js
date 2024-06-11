"use client";
import { useState, useEffect } from "react";
import "./items.css";

export default function Customer(props) {
  const [sale, setSale] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!sale) {
      fetch(
        `https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=${page}`
      )
        .then((response) => response.json())
        .then((data) => {
          const foundSale = data.find((sale) => sale._id == props.params.id);
          if (foundSale) {
            setSale(foundSale);
          } else {
            setPage(page + 1);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [page, sale]);

  if (!sale) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="justify-center">
      <h1 className="items-header">Detalle de los Productos</h1>
      <div className="table-container">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tags</th>
                <th>Precio</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {sale.items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div>{item.name}</div>
                  </td>
                  <td>
                    <div>{item.tags.join(", ")}</div>
                  </td>
                  <td>
                    <div>{item.price.$numberDecimal}</div>
                  </td>
                  <td>
                    <div>{item.quantity}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
