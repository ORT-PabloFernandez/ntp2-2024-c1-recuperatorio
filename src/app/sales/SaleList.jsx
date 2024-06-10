import Sale from "./Sale";
import "./sales.css";

export default function SaleList(props) {
    return (
      <ul className="sales-list">
        {props.Sales.map((sale,index) => {
          return (
            <Sale
              key={index}
              Id={sale["_id"]}
              Date={sale.saleDate}
              Location={sale.storeLocation}
              Purchased={sale.purchaseMethod}
            />
          );
        })}
      </ul>
    );
  }