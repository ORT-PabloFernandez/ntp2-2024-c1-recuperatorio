
import Link from "next/link";
import "./sales/Sales.css"
export default function Home() {
  return (
    <div>
      <h1 className="titulo">Bienvenido sitio de ventas</h1>
      <div className="buttonsContainer">
      <Link href={`/sales`} passHref>
        <button className="button-title">Visualizar ventas</button>
      </Link>
      </div>
    </div>

  );
}
