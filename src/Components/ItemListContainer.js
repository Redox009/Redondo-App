import ListItem from "../Components/ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

let productosMacetas = [
        {
            id: 1,
            nombre: "Maceta Redonda",
            imagen: "../img/producto4.png",
            precio: 153,
            categoria : 1
        },
        {
            id: 2,
            nombre: "Maceta Cuadrada",
            precio: 200,
            categoria : 2
        },
        {
            id: 3,
            nombre: "Maceta Azul",
            precio: 300,
            categoria : 3
        }
    ]

const ItemListContainer = () => {

        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)
        const {id} = useParams()
        
        
        useEffect(() => {
            
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    console.log(id)
          
                    res(productosMacetas)
                 
                }, 2000)
            })
    
            promesa
            .then((respuestaDeLaApi) => {
                setProductos(productosMacetas)
            })
            .catch((errorDeLaApi) => {
                console.log("Error al cargar los productos")
            })
            .finally(() => {
                setLoading(false)
            })

    
        },[id])
    
        return (
            <>
                <p>{loading ? "Cargando..." : "Productos a la Venta:"}</p>
                <ListItem productos={productos}/>
            </>
        )
    }
    
    export default ItemListContainer