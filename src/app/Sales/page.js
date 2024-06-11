"use client";
import Sidebar from "../Sidebar";
import { useState, useEffect } from "react";
import SalesList from "./SalesList";

export default function SalesPage(props) {
  const [sales, setSales] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const pageSize = 100;

  const fetchSales = (page) => {
    const url = `https://salesbackend.azurewebsites.net/api/sales?pageSize=${pageSize}&page=${page}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSales(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchSales(page);
  }, [page]);

  const nextPage = () => {
    setPage((activePage) => activePage + 1);
  };

  const prevPage = () => {
    setPage((activePage) => (activePage > 1 ? activePage - 1 : 1));
  };

  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <div>
            <p className="text-center text-5xl font-bold text-black pt-5">
              VENTAS
            </p>
          </div>
          {loading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            <SalesList Sales={sales} />
          )}
        </div>
        <div className="fixed rounded-2xl bottom-0 left-1/2 transform -translate-x-1/2 mb-5 bg-black bg-opacity-50 px-3 py-2">
          <div className="flex items-center">
            <button onClick={prevPage} disabled={page === 1}>
              Anterior
            </button>
            <span className="mx-5 text-white">Pagina: {page}</span>
            <button onClick={nextPage}>Siguiente</button>
          </div>
        </div>
      </div>
    </main>
  );
}
