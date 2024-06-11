"use client";
import Sidebar from "../../Sidebar";
import { useState, useEffect } from "react";
import Customer from "../Customer";

export default function CustomerPage({ params }) {
  const { id } = params;
  const [customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://salesbackend.azurewebsites.net/api/sales";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const sale = data.find((sales) => sales["_id"] === id);
        setCustomer(sale.customer);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          {loading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            <Customer Customer={customer} />
          )}
        </div>
      </div>
    </main>
  );
}
