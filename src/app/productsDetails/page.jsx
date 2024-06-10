"use client";

import { useSearchParams } from "next/navigation";

export default function ProductsDetails() {
    const searchParams = useSearchParams();
    const productsData = JSON.parse(searchParams.get('data'));

    console.log(productsData)

    return (<>
        <section className="productsDetails">
            {
                productsData.map((product, index) => (
                    <div key={index} className="cardProductDetails">
                        <h2>Product name : {product.name}</h2>
                        <h2>Tags : {product.tags}</h2>
                        <h2>Price: {parseFloat(product.price['$numberDecimal']).toFixed(2)}</h2>
                        <h2>Quantity : {product.quantity}</h2>
                    </div>
                ))
            }
        </section>
    </>)
}
