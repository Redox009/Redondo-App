import ItemDetail from "../Components/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { MACETAS } from "./Data"

const ItemDetailContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {tipos} = useParams()


    
    useEffect(() => {
        
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                console.log(tipos)
                if (!tipos) {
                    productosMacetas = MACETAS.filter((MACETAS) => MACETAS.categoria === tipos);
                     return res(productosMacetas) 
                }
                else {
                    return res(productosMacetas = MACETAS) 
                }
              }
            
        , 2000)
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


    },[tipos])

    
        return (
            <>
            <ItemDetail productosM={productos}/>
            
            </>
        )
    }
    
    export default ItemDetailContainer

