import Venta from "./Venta";
export default function VentasList(props){
    return (
            props.ventas.map((venta) =>{
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
            })
    );
}