import Product from "./product";

export default function listProduct(props){
    return (
        <div >
            {props.products.map((product, index) =>{
                return(
                    <Product 
                        key={index}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                    />
                );
            })}
        </div>
    );
}