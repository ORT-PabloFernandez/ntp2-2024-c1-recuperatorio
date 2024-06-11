/*todos los datos del cliente de la compra, ademas de su satisfacción de la compra
"customer": {
      "gender": "F",
      "age": 28,
      "email": "wukdamit@mev.bb",
      "satisfaction": 3
*/
export default function Customer(props) {
  return (
    <div>
      <div class="p-10">
        <div>
          <h2 class="text-2xl font-bold">Información del cliente:</h2>
          <h2 class="text-xl font-bold">
            Genero:{" "}
            <span class="text-xl font-light">{props.Customer.gender}</span>
          </h2>
          <h2 class="text-xl font-bold">
            Edad: <span class="text-xl font-light">{props.Customer.age}</span>
          </h2>
          <h2 class="text-xl font-bold">
            Email:{" "}
            <span class="text-xl font-light">{props.Customer.email}</span>
          </h2>
          <h2 class="text-xl font-bold">
            Satisfacción:{" "}
            <span class="text-2xl font-light">
              {props.Customer.satisfaction}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
