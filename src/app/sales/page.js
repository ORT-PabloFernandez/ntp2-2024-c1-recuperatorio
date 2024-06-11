"use client";

import "./sales.css";
import { useEffect, useState } from "react";
import SalesList from "./SalesList.jsx";

export default function SalePage() {
  const [sales, setSales] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4">Ventas</h1>
      <SalesList sales={sales} />
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded m-20"
          onClick={prevPage}
        >
          Anterior
        </button>
        <button
          className="px-4 py-2 ml-2 bg-blue-500 text-white rounded m-20"
          onClick={nextPage}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
