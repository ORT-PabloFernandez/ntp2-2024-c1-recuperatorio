"use client";
import ItemList from "./ItemList";
import Link from 'next/link';

import { useEffect, useState } from "react";

export default function ItemPage({ params }) {
  const { id } = params;
  const [items, setItems] = useState([]);
  const url =
    "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const venta = data.find((venta) => venta["_id"] === id);
        setItems(venta.items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
       <Link 
                href="/ventas"
                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              >
                Volver a Ventas
              </Link>
      <ItemList items={items} />
    </div>
  );
}