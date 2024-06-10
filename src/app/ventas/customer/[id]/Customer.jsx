import Link from 'next/link';

export default function Customer(props){
    return (
       <div className="flex justify-center items-center min-h-screen">
          <article className="rounded-xl border-2 border-gray-100 bg-white p-8">
            <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  className="size-24 rounded-lg object-cover"
                />

              <div>
                <p className="line-clamp-2 text-lg text-gray-700">
                Email: {props.email}</p>
                <p className="line-clamp-2 text-lg text-gray-700">
                Edad: {props.age}</p>
                <p className="line-clamp-2 text-lg text-gray-700">
                Genero: {props.gender}
                </p>
                <p className="line-clamp-2 text-lg text-gray-700">
                Satisfacion: {props.satisfaction}</p>
             
              </div>
            </div>

            <div className="flex justify-end p-4">
              <Link 
                href="/ventas"
                className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
              >
                Volver a Ventas
              </Link>
            </div>
          </article>
        </div>
    );
}
