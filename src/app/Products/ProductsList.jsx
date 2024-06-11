import Product from "./Product";

export default function ProductsList(props) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 p-20">
      {props.Products.map((product) => {
        return (
          <Product
            Name={product.name}
            Price={parseFloat(product.price.$numberDecimal)}
            Quantity={product.quantity}
          />
        );
      })}
    </div>
  );
}
