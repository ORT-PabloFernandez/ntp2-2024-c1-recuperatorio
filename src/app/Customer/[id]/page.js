"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Customer({ params }) {
  const { id } = params;
  const [customer, setCustomer] = useState([]);
  const URL =
    "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const sale = data.find((sale) => sale._id === id);
        setCustomer(sale.customer);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div class="px-4 py-2 ">
      <main class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-2 m-4 ">
          Detalle del cliente
        </h1>
        <Link href={`/`} class="text-blue-400 text-sm font-medium">
          volver al Home
        </Link>
      </main>
      <div class="text-gray-600 m-4 text-center">
        <p>
          <strong>Genero:</strong> {customer.gender}
        </p>
        <p>
          <strong>Edad:</strong> {customer.age}
        </p>
        <p>
          <strong>Email:</strong> {customer.email}
        </p>
        <p>
          <strong>Satisfacción:</strong> {customer.satisfaction}
        </p>
      </div>
    </div>
  );
}
