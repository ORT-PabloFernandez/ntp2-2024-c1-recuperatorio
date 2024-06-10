import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Link 
        href="/ventas"
        className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
      >
        Ir a Ventas
      </Link>
    </div>
  );
}