import ListItem from "../Components/ItemList"
import { useState, useEffect } from "react"



const ItemListContainer = () => {

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
                <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
                <ListItem productos={productos}/>
            </>
        )
    }
    
    export default ItemListContainer