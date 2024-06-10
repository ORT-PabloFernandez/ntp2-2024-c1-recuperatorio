'use client';
import { useEffect, useState } from 'react';
import Product from '../Product';

export default function productList({ params }) {
	const { id } = params;
	const [productList, setProductList] = useState([]);
	const URL = 'https://salesbackend.azurewebsites.net/api/sales';

	useEffect(() => {
		fetch(URL)
			.then(res => res.json())
			.then(data => data.find(sale => sale._id === id))
			.then(sale => setProductList(sale.items))
			.catch(err => console.error(err));
	}, [id]);

	return (
		<div>
			{productList.map((product, i) => {
				return <Product key={i} product={product} />;
			})}
		</div>
	);
}
