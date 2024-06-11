import Link from "next/link";

export default function Sale(props) {
  return (
    <Link href={`/Products/${props.id}`}>
      <div
        key={props.id}
        className="card rounded-lg flex flex-col justify-between h-full p-5"
      >
        <div>
          <h1>Fecha: {props.Date}</h1>
        </div>
        <div>
          <h1>Ubicación: {props.Location}</h1>
        </div>
        <div>
          <h1>Metodo Compra: {props.PurchaseMth}</h1>
        </div>
        <div className="m-2 self-center items-end">
          <button className="button2">
            <Link href={`/Customer/${props.id}`}>Cliente</Link>
          </button>
        </div>
      </div>
    </Link>
  );
}
