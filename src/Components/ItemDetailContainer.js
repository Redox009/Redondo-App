import ItemDetail from "../Components/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


let productosMacetasDetalle = [
  {
      id: 1,
      nombre: "Maceta Chica",
      imagen: "../img/producto4.png",
      precio: 153,
      categoria : 1
  },
  {
      id: 2,
      nombre: "Maceta Mediana",
      precio: 200,
      categoria : 2
  },
  {
      id: 3,
      nombre: "Maceta Grande",
      precio: 300,
      categoria : 3
  }
]

const ItemDetailContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  
  
  useEffect(() => {
      
      const promesa = new Promise((res, rej) => {
          setTimeout(() => {
              console.log(id)
    
              res(productosMacetasDetalle)
           
          }, 2000)
      })

      promesa
      .then((respuestaDeLaApi) => {
          setProductos(productosMacetasDetalle)
      })
      .catch((errorDeLaApi) => {
          console.log("Error al cargar el producto")
      })
      .finally(() => {
          setLoading(false)
      })


  },[id])

  return (
      <>
  
          <ItemDetail productosMacetasDetalle={productos}/>
      </>
  )
}

export default ItemDetailContainer