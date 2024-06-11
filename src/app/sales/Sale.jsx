import Link from "next/link";
import "./sales.css";

export default function Sale(props) {
  return (
    <li className="sale-item">
      <div className="card sale-item__content">
        <div className="sale-item__info">
          <p>{props.saleDate}</p>
          <p>{props.storeLocation}</p>
          <p>{props.purchaseMethod}</p>
        </div>
        <div>
          <Link href={`sales/${props._id}/items/`}>
            <button className="btn btn-primary">Ver Productos</button>
          </Link>
        </div>
        <div>
          <Link href={`sales/${props._id}/customer/`}>
            <button className="btn btn-primary">Ver Comprador</button>
          </Link>
        </div>
      </div>
    </li>
  );
}
