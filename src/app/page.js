'use client';
import SalesList from './SalesList';
import { useEffect, useState } from 'react';

export default function Home() {
	const [sales, setSales] = useState([]);
	const URL = `https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=0`;

	useEffect(() => {
		fetch(URL)
			.then(data => data.json())
			.then(data => setSales(data))
			.catch(err => console.error(err));
	}, []);

	return (
		<div>
			<SalesList sales={sales} />
		</div>
	);
}
