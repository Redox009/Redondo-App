import {useState,  useContext} from "react"
import {contexto} from "../Components/miContexto"


const Main = ({productos}) => {
    
    const initial = 0;
    const [contador, setContador] = useState(initial)


    const agregar = () => {
      
        setContador(contador + 1);
        if (contador > productos){
            return  setContador(contador - 1)
        }
    }

    const quitar = () => {

        setContador(contador - 1)
        if (contador < 0){
            return  setContador(contador + 1)
        }
    }

    const resetear = () => {

        setContador(0)
    }

    return (
        <main className="container">
            
            <p>Cantidad de Macetas en Stock: {productos}</p>
            <p>Cantidad de Macetas: {contador}</p>

            <button onClick={agregar}>Agregar</button>
           
            <button onClick={quitar}>Restar</button>

            <button onClick={resetear}>Resetear</button>
            <br></br>

        </main>
    );
}

export default Main;