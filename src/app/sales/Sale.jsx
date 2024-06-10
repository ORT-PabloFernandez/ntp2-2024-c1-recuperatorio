import React from 'react';
import Link from "next/link";
import "./sales.css";

export default function Sale(props) {
    return (
      <li className="sale-item">
        <div className="card sale-item__content">
            <div>
              <div className="titleStandar">
                <ul>
                  <li><strong>SaleDate:</strong> {props.Date}</li>
                  <li><strong>Location:</strong> {props.Location}</li>
                  <li><strong>Purchase:</strong> {props.Purchased}</li>
                  <Link href={`/customer/${props.Id}`}><button>Customer</button></Link>
                  <Link href={`/items/${props.Id}`}>
                  <button>Item</button></Link>
                </ul>
              </div>
            </div>
        </div>
      </li>
    );
  }