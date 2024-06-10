import Image from "next/image";
import Link from "next/link";
import './sales/sales.css'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <Link href="/sales" className="border border-gray-300 p-2">
      Sales
    </Link>
    </div>
  );
}
