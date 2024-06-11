import "./Home.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Ingresar a las 100 ventas</h1>
      <Link href={"/sales"}>
        <button className="home-button">Revisar ventas</button>
      </Link>
    </div>
  );
}
