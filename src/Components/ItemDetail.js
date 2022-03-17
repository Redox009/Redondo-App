


const ItemDetail = ({productosMacetasDetalle}) => {
    return (
          <div>
            
              <p>{productosMacetasDetalle.nombre}</p>
              <p>Precio : ${productosMacetasDetalle.precio}</p>
              <img src = {productosMacetasDetalle.imagen}  alt="Maceta"></img>
          </div>
        
      
    )
  }
  
  export default ItemDetail