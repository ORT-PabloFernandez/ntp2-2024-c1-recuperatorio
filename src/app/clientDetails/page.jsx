"use client";

import { useSearchParams } from "next/navigation";

export default function Sale() {

    const searchParams = useSearchParams();
    const genderCustomer = searchParams.get('genderCustomer');
    const ageCustomer = searchParams.get('ageCustomer');
    const emailCustomer = searchParams.get('emailCustomer');
    const satisfactionCustomer = searchParams.get('satisfactionCustomer');


    return (
        <div className="clientDetails">
            <div className="clientCard">
                <h2>Client Details : </h2>
                <p>Gender : {genderCustomer}</p>
                <p>Age : {ageCustomer}</p>
                <p>Email : {emailCustomer}</p>
                <p>Satisfaction : {satisfactionCustomer}</p>
            </div>
        </div>
    )

}