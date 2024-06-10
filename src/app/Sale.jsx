import Link from 'next/link';

export default function Sale(data) {
	return (
		<div>
			<p>Date: {data.saleDate}</p>
			<p>Location: {data.storeLocation}</p>
			<p>Purchase method: {data.purchaseMethod}</p>
			<div>
				<Link href={`http://localhost:3000/customer/${data.id}`}>View Customer</Link>
			</div>
			<div>
				<Link href={`http://localhost:3000/products/${data.id}`}>View Product List</Link>
			</div>
		</div>
	);
}
