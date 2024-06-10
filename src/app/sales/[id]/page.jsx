"use client"

import { useState, useEffect } from "react";
import "./Item.css";
export default function PageProductDetails({ params }) {

    const { id } = params;
    const [sale, setSale] = useState([]);

    useEffect(() => {
        fetch("https://salesbackend.azurewebsites.net/api/sales")
            .then(
                (response) => response.json()
            )
            .then((data) => {
                console.log(data);
                setSale(data.find((sale) => sale["_id"] === id));
            })
            .catch((error) => console.log(error));
    }, [id]);


    return (
        <div className="">
            {sale.items ? (
                sale.items.map((item, index) => (
                    <div key={index}>
                         <ul className="sale-grid-item">
                        <li className="sale-items">
				<div className="sale-content-item">
					<div className="sale-details-item">
                        <h3>Producto: {item.name}</h3>
                        <p>Precio: {item.price.$numberDecimal}</p>
                        <p>Cantidad: {item.quantity}</p>
                    </div>
                    </div>
                    </li>
                    </ul>
                    </div>
                ))
            ) : (
                <p className="sale-info">Información de los productos inicializando.</p>
            )}
        </div>
    );
}