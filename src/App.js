import Header from "./Components/Header"
import ItemCount from "./Components/ItemCount"
import ItemListContainer from "./Components/ItemListContainer"

function App() {

    const usuarios = ["Fede"]
    const miOnAdd = () => {}

    return (
        <>
            <Header/>
            <ItemCount nombre="Usuario"  onAdd={miOnAdd}  stock={6} initial={1}>
                <p>Libreria Mundo</p>
                <p>Tus libros, ahora</p>
            </ItemCount>
            <ItemListContainer/>
        </>
    )
}

export default App
