"use client";
import Link from "next/link";

export default function Customer(props) {

    let allProps = props;

    let productsData = props.products;

    return (
        <div className="cardSale" key={props.key}>
            <p className="cardLocation">Location : {props.storeLocation}</p>
            <p className="cardDate">Date : {props.saleDate}</p>
            <p className="cardPurchaseMethod">Purchase Method : {props.purchaseMethod}</p>
            <div className="buttonsCardSale">
                <Link href={{ pathname: '/clientDetails', query: allProps }} className="buttonCard">
                    View details of customer
                </Link>
                <Link href={{ pathname: '/productsDetails', query: { data: JSON.stringify(productsData) } }} className="buttonCard">
                    View details of products
                </Link>
            </div>
        </div>
    );
}
