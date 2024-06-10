
export default function Product(props){
    return(
    <div>
        <h3>Nombre: {props.name}</h3>
        <p>Precio: ${props.price["$numberDecimal"]}</p>
        <span >Cantidad: {props.quantity}</span>
    </div>
    );
}