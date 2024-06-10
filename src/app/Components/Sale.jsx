import Link from "next/link";

export default function Sale(props) {
  return (
    <div class="bg-slate-300 shadow-xl m-2 p-2 rounded-lg">
      <h1 class="mb-1">Fecha: {props.saleDate}</h1>
      <h1 class="mb-1">Locación: {props.storeLocation}</h1>
      <h1 class="mb-1">Método: {props.purchaseMethod}</h1>
      <section class="grid">
        <Link
          href={`/Customer/${props._id}`}
          class="text-blue-700 font-semibold"
        >
          ver cliente
        </Link>
        <Link
          href={`/Productos/${props._id}`}
          class="text-blue-700 font-semibold"
        >
          ver productos
        </Link>
      </section>
    </div>
  );
}
