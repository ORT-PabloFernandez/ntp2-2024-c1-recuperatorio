import Venta from "./Venta";
export default function VentasList(props){
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
            {props.ventas.map((venta) =>{
                return(
                    <Venta 
                        id={venta["_id"]}
                        saleDate={venta.saleDate}
                        storeLocation={venta.storeLocation}
                        purchaseMethod={venta.purchaseMethod}
                        customer={venta.customer}
                        items={venta.items}
                    />
                );
            })}
        </div>
    );
}
