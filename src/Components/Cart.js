import {useContext} from "react"
import {contexto} from "../Components/miContexto"



const Cart = () => {

    const result = useContext(contexto)
    const cart = result.cart
    

    console.log(result)

    const handleBorrar = () => {
        console.log("borrar")
        
    }

    return (
        <>
        <h2>Carrito</h2>
        {cart.map(item => (
            <div key={item.id}>
                <h3>{item.titulo}</h3>
                <p>{item.precio} x {item.cantidad}</p>
                <p>Total : ${item.precio * item.cantidad}</p>
                <button onClick={handleBorrar}>borrar</button>
            </div>
        )
        )
        }
    </>
    )
  }
  
  export default Cart

