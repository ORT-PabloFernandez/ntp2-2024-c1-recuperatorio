"use server";

import Customer from "./Customer";

export default async function Sales() {
    let response = await fetch(
        "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
    );

    let sales = await response.json();

    // console.log(sales)

    return (
        <section className="cardsSales">

            {sales.map((sale, index) => (
                <Customer
                    key={index}
                    sale={sale}
                    storeLocation={sale.storeLocation}
                    saleDate={sale.saleDate}
                    purchaseMethod={sale.purchaseMethod}
                    genderCustomer={sale.customer.gender}
                    ageCustomer={sale.customer.age}
                    emailCustomer={sale.customer.email}
                    satisfactionCustomer={sale.customer.satisfaction}
                    products={sale.items}
                />
            ))}
        </ section>
    );
}
