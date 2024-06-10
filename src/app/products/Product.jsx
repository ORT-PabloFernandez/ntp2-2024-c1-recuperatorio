export default function Product(data) {
	return (
		<div>
			<p>Name: {data.product.name}</p>
			<p>Price: {data.product.price.$numberDecimal}</p>
			<p>Quantity: {data.product.quantity}</p>
		</div>
	);
}
