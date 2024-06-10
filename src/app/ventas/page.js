"use client";

import ListVentas from "./listVentas";

import { useEffect, useState } from "react";

export default function VentasPage(){
    const [ventas, setVentas] = useState([]);


    useEffect(()=>{
        fetch( "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1")
        .then((response) => response.json())
        .then((data) => {
            setVentas(data);
        }).catch((error) => console.error(error));
    },[])

    return (
        <>
            <ListVentas ventas={ventas} />
        </>

    );
}