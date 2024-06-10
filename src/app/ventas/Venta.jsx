
export default function Venta(props){
    return (  
        <>
        <article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
  <div className="flex items-center gap-4">
    <div>
      <p className="text-lg font-medium text-white">Ubicacion: {props.storeLocation}</p>
      <p className="text-lg font-medium text-white">Fecha: {props.saleDate}</p>
      <p className="text-lg font-medium text-white">Metodo de compra: {props.purchaseMethod}</p>
    </div>

  </div>

  <ul className="mt-4 space-y-2">
    <li>
      <a href={`ventas/customer/${props.id}`} className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong className="font-medium text-white">Cliente</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
            datos del cliente
        </p>
      </a>
    </li>

    <li>
      <a href={`ventas/items/${props.id}`} className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
        <strong className="font-medium text-white">Items</strong>

        <p className="mt-1 text-xs font-medium text-gray-300">
         datos de los items
        </p>
      </a>
    </li>
  </ul>
</article>
        </>
        
    );}