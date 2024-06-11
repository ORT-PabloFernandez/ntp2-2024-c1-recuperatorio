import Sale from "./Sale.jsx";
import "./sales.css";

export default function SalesList(props) {
  return (
    <ul className="sales-list">
      {props.sales.map((sale) => {
        return (
          <Sale
            _id={sale["_id"]}
            saleDate={sale["saleDate"]}
            saleLocation={sale["saleLocation"]}
            purchaseMethod={sale["purchaseMethod"]}
            customer={sale["customer"]}
            items={sale["items"]}
          />
        );
      })}
    </ul>
  );
}
