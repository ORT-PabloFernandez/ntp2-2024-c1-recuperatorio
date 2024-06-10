import Sale from './Sale';
export default function SalesList(data) {
	return (
		<div>
			<ul>
				{data.sales.map(sale => {
					return (
						<li>
							<Sale
								key={sale._id}
								id={sale._id}
								saleDate={sale.saleDate}
								storeLocation={sale.storeLocation}
								purchaseMethod={sale.purchaseMethod}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
