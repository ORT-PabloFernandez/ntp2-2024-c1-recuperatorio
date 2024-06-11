import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <h1 class="text-center text-5xl font-bold text-black p-10">
            Bienvenido
          </h1>
          <h1 class="text-center text-lg font-light text-black">
            Recuperatorio PNT2
          </h1>
          <h1 class="text-center text-lg font-bold text-black">
            Alumno:{" "}
            <span class="text-left text-lg font-light text-black">
              Martin Bikiel
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
}
