"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Customer({ params }) {
  const { id } = params;
  const [items, setItems] = useState([]);
  const URL =
    "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const sale = data.find((sale) => sale._id === id);
        setItems(sale.items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div class="px-4 py-2 ">
      <main class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-2 m-4 ">
          Detalle de los productos
        </h1>
        <Link href={`/`} class="text-blue-400 text-sm font-medium ">
          {" "}
          volver al Home
        </Link>
      </main>
      <ul class="grid grid-cols-6  ">
        {items.map((item) => {
          return (
            <div class="rounded-lg bg-slate-300 m-4 p-4 shadow-xl">
              <h1>Nombre: {item.name}</h1>
              <p>${item.price.$numberDecimal}</p>
              <p>{item.quantity} unidades</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
