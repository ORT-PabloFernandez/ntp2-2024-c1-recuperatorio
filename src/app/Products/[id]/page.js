"use client";
import Sidebar from "../../Sidebar";
import { useState, useEffect } from "react";
import ProductsList from "../ProductsList";

export default function CustomerPage({ params }) {
  const { id } = params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://salesbackend.azurewebsites.net/api/sales";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const sale = data.find((sales) => sales["_id"] === id);
        setProducts(sale.items);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <div>
            <p className="text-left ml-10 text-5xl font-bold text-black pt-5">
              Articulos:
            </p>
          </div>
          {loading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            <ProductsList Products={products} />
          )}
        </div>
      </div>
    </main>
  );
}
