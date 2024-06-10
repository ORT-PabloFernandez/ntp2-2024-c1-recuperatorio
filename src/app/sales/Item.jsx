import React from 'react'
import "./css/item.css";
export default function Item (props) {
    return (
        <div className="card ">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner"> 
                <span> 
                    Nombre:{props.name}
                </span>
                <br/>
                <span> 
                    precio:{props.price}
                </span>
                <br/>
                <span> 
                    Cantidad:{props.quantity}
                </span>
                <br/>                  
            </div>
        </div>
    )
}