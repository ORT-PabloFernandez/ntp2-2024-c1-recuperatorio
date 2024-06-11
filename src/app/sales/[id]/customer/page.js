"use client";
import { useState, useEffect } from "react";
import "./customer.css";

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
    <div className="customer-container">
      <div className="customer-header">
        <p>Detalle del Comprador</p>
      </div>
      <div className="customer-details">
        <div className="customer-detail">
          <p>Genero:</p>
          <p>{sale.customer.gender}</p>
        </div>
        <div className="customer-detail">
          <p>Edad:</p>
          <p>{sale.customer.age}</p>
        </div>
        <div className="customer-detail">
          <p>Email:</p>
          <p>{sale.customer.email}</p>
        </div>
        <div className="customer-detail">
          <p>Satisfacción:</p>
          <p>{sale.customer.satisfaction}</p>
        </div>
      </div>
    </div>
  );
}
