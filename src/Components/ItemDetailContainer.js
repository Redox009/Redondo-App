import ItemDetail from "../Components/ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)
        const {id} = useParams()
        
        
        useEffect(() => {
            
            const promesa = new Promise((res, rej) => {
                setTimeout(() => {
                    console.log(id)
          
                    res(productos)
                 
                }, 2000)
            })
    
            promesa
            .then((respuestaDeLaApi) => {
                setProductos(productos)
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
            
                <ItemDetail />
            </>
        )
    }
    
    export default ItemDetailContainer
