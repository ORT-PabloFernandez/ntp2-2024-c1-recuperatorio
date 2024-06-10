"use client";
import { useState, useEffect } from "react";
import Item from "@/app/sales/Item";
import Loading from "@/app/sales/Loading";

export default function PageDetails({ params }) {
    const { id } = params;
    const [sale, setSale] = useState(null);
  
    useEffect(() => {
      fetch(
        localStorage.getItem("url")
      )
        .then((response) => response.json())
        .then((data) => {
          setSale(data.find((sale) => sale["_id"] === id));
        })
        .catch((error) => console.log(error));
    }, []);
    return (
      <>
          {
            sale === null
            ?
              (
                <Loading/>
              )
            :
              (
              <>
                  <div className="flex flex-wrap justify-around items-center">
                      {sale.items.map((item, index) => (
                        <><div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4 border-4 border-blue-500 bg-white">
                        </div><Item name={item.name} price={item.price.$numberDecimal} quantity={item.quantity}  /></>
                      ))}
                  </div>
              </>
              )
          }
      </>
    );
  }