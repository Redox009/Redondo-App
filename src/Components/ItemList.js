import React from "react";
import Item from "../Components/Item"


const ListItem = ({productos}) => {
        return (
            <ul>
                {productos.map((producto) => {
                    return <Item key={producto.id} producto={producto}/>
                })}
            </ul>
        )
    }
    
    export default ListItem


