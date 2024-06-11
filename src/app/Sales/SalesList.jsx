import Sale from "./Sale";

export default function SalesList(props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-5 mb-20">
      {props.Sales.map((sale) => {
        return (
          <Sale
            id={sale["_id"]}
            Date={sale.saleDate}
            Location={sale.storeLocation}
            PurchaseMth={sale.purchaseMethod}
          />
        );
      })}
    </div>
  );
}
