"use client";
import { useState, useEffect } from "react";
import Sale from "./Sale";
import Link from "next/link";

export default function SalesList() {
  const [sales, setSales] = useState([]);
  const URL =
    "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main class="px-4 py-2 ">
      <h1 class="text-4xl font-bold text-gray-800 mb-6 m-4 text-center">
        Ventas
      </h1>
      <div class="grid grid-cols-4  ">
        {sales.map((sale) => {
          return (
            <Sale
              _id={sale._id}
              saleDate={sale.saleDate}
              storeLocation={sale.storeLocation}
              purchaseMethod={sale.purchaseMethod}
            />
          );
        })}
      </div>
    </main>
  );
}
