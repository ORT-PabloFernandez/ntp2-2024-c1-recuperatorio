/*
solo es necesario saber el nombre, el precio y la cantidad.
    "items": [
      {
        "name": "pens",
        "tags": [
          "writing",
          "office",
          "school",
          "stationary"
        ],
        "price": {
          "$numberDecimal": "34.76"
        },
        "quantity": 2
      },
*/

export default function Product(props) {
  return (
    <div
      key={props.id}
      className="card rounded-lg flex flex-col justify-between max-w-fit p-4"
    >
      <div>
        <h1>Nombre: {props.Name}</h1>
      </div>
      <div>
        <h1>Precio: {props.Price}</h1>
      </div>
      <div>
        <h1>Cantidad: {props.Quantity}</h1>
      </div>
    </div>
  );
}
