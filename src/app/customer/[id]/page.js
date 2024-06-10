'use client';
import { useEffect, useState } from 'react';
import Customer from '../Customer';

export default function customerDetail({ params }) {
	const { id } = params;
	const [customer, setCustomer] = useState({});
	const URL = 'https://salesbackend.azurewebsites.net/api/sales';
	useEffect(() => {
		fetch(URL)
			.then(res => res.json())
			.then(data => data.find(sale => sale._id === id))
			.then(sale => setCustomer(sale.customer))
			.catch(err => console.error(err));
	}, [id]);
	return (
		<div>
			<Customer customer={customer} />
		</div>
	);
}
