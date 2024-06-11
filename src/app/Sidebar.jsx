import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex h-screen flex-col justify-between border-r bg-white">
      <div className="px-4 py-6">
        <ul className="mt-6 space-y-1">
          <li>
            <Link
              href="/"
              className="block rounded-lg bg-gray-100 px-10 py-2 text-base font-medium text-gray-700 text-center"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/Sales"
              className="block rounded-lg bg-gray-100 px-10 py-2 text-base font-medium text-gray-700 text-center"
            >
              Ventas
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
