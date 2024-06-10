"use client";

import ListProduct from "./listProduct";

import { useEffect, useState } from "react";

export default function ProductsPage({ params }){
    const { id } = params;
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1")
      .then((response) => response.json())
      .then((data) => {
        const venta = data.find((venta) => venta["_id"] === id);
        setProducts(venta.items);
      })
      .catch((error) => console.log(error));
  }, []);


    return (
        <ListProduct  products={products}/>
    );
}