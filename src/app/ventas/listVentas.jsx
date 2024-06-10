import Venta from "./ventas";


export default function ListVentas(props){
    return (
        <div >
            {props.ventas.map((venta, index) =>{
                return(
                    <Venta 
                        key={index}
                        id={venta["_id"]}
                        saleDate={venta.saleDate}
                        storeLocation={venta.storeLocation}
                        purchaseMethod={venta.purchaseMethod}
                    />
                );
            })}
        </div>
    );
}