export default function Customer(data) {
	return (
		<div>
			<p>Email: {data.customer.email}</p>
			<p>Age: {data.customer.age}</p>
			<p>Gender: {data.customer.gender}</p>
			<p>Satisfaction: {data.customer.satisfaction}</p>
		</div>
	);
}
