"use client";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import SaleList from "./SaleList";


export default function SalesPage(){
    const [sales, setSales] = useState([]);
    const [page, setPage] = useState(1);
    const [totalSales, setTotalSales] = useState(0);
    const [pageSize, setPageSize] = useState(100);
    const [totalPages, setTotalPages] = useState(0)
   
    const urlTotal = "https://salesbackend.azurewebsites.net/api/sales";
    useEffect(() => {
        fetch(urlTotal)
        .then((response) => response.json())
        .then((data) => {
            setTotalSales(data.length);
            if(data.length % pageSize !== 0)
                setTotalPages(parseInt(data.length / pageSize));
            else
                setTotalPages(data.length / pageSize);
        }).catch((error) => console.error(error));
    },[]);

    const url = `${urlTotal}?page=${page}&pageSize=${pageSize}`;
    useEffect(() => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setSales(data);
                localStorage.setItem("url", url);
            }).catch((error) => console.error(error));
            },[page]);

    return (
        <>
                {sales.length === 0 || totalSales === 0 ? (
                <Loading/>
            ) : (
                <>
                <SaleList Sales={sales}/>
                </>
            )}
        </>
    );
}