import Link from "next/link";

export default function Venta(props){
    return (

                <div>
                    <h3>Venta</h3>
                    <div>
                        <ul className="flex flex-wrap">
                            <li>
                                <p>Fecha: {props.saleDate} </p>
                            </li>
                            <li>
                                <p>Locacion: {props.storeLocation} </p>
                            </li>
                            <li>
                                <p>Metodo de compra: {props.purchaseMethod}</p>
                            </li>
                        </ul>
                    </div>
                    <Link href={`ventas/customer/${props.id}`}>
                        <p >Datos del cliente</p>
                    </Link>
                    <Link href={`ventas/products/${props.id}`}>
                        <p >Datos del producto</p>
                    </Link>
                </div>
    );
}