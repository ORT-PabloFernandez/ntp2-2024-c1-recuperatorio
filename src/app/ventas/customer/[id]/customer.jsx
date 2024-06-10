
export default function Customer(props){
    return (
        <div >
            <div >
                <span >Email: {props.email}</span>
            </div>
            <div >
                <span >Edad: {props.age}</span>
            </div>
            <div >
                <span >Genero: {props.gender}</span>
            </div>
            <div >
                <span >Satisfacion: {props.satisfaction}</span>
            </div>
        </div>
    );
}