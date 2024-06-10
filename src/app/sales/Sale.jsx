import "./Sales.css";
import Link from "next/link";
export default function Sale(props) {
	return (
		<div>
			<li className="sale-item">
				<div className="sale-content">
					<div className="sale-details">
						<h2>SaleDate: {props.saleDate}</h2>
						<h2>StoreLocation: {props.storeLocation}</h2>
							<h2>Method: {props.purchaseMethod}</h2>
						</div>
						<div className="buttonsContainer">
                        <Link href={`/sales/${props.id}`} passHref>
                            <button>Ver Productos</button>
                        </Link>
                        <Link href={`/sales/client/${props.id}`} passHref>
                            <button>Ver Cliente</button>
                        </Link>
                    </div>
				</div>
			</li>
		</div>
	);
}