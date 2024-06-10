"use client"

import { useState, useEffect } from "react";
import "./Client.css"
export default function PageClientDetails({ params }) {

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
            {sale.customer ? (
                <>
                <div class="container-client">
                    <li className="sale-item-client">
                        <div className="sale-details-client">
                            <h3 className="sale-plot">Sexo: {sale.customer.gender}</h3>
                            <h3 className="sale-plot">Edad: {sale.customer.age}</h3>
                            <h3 className="sale-plot">Email: {sale.customer.email}</h3>
                            <h3 className="sale-plot">Satisfacción: {sale.customer.satisfaction}</h3>
                        </div>
                    </li>
                    </div>

                </>
            ) : (
                <p className="sale-info">Información del cliente inicializando.</p>
            )}

        </div>
    );
}