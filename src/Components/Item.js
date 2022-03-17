
import { Link , NavLink } from "react-router-dom";

const Item = ({producto}) => {
    return (
      <div>
        <NavLink to="/macetas/:id">
          <p>{producto.nombre}</p></NavLink>
          <p>Precio : ${producto.precio}</p>
          <img src = {producto.imagen}  alt="Maceta"></img>
      </div>
    )
  }
  
  export default Item



