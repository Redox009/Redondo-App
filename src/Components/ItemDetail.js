import ItemCount from "../Components/ItemCount"
import { Link , NavLink } from "react-router-dom";

const ItemDetail = ({productosMacetasDetalle}) => {
    return (<>
          <div>
            
              <p>{productosMacetasDetalle.nombre}</p>
              <p>Precio : {productosMacetasDetalle.precio}</p>
              <img src = {productosMacetasDetalle.imagen}  alt="Maceta"></img>
          </div>
        <div>
        <ItemCount/>

        <NavLink to="/cart">
            <p>Finalizar Compra</p>
        </NavLink>
        </div>
        </>
    )
  }
  
  export default ItemDetail