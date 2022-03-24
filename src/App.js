import Header from "./Components/Header"
import ItemCount from "./Components/ItemCount"
import Cart from "./Components/Cart"
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import {Route, Router, Routes} from "react-router-dom"
import MiProvider from "./Components/miContexto"


function App() {

    return (
        <>
        <MiProvider>
        <Header/>
            <Routes>  
            <Route path="/" element={<ItemListContainer/>}/> 
            <Route path="/categoria/:id" element={<ItemListContainer/>}/>
            <Route path="/macetas/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </MiProvider>
        </>
    )
}

export default App
