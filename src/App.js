import Header from "./Components/Header"
import ItemCount from "./Components/ItemCount"
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import {Route, Router, Routes} from "react-router-dom"


function App() {

    return (
        <>
        
        <Header/>
            <Routes>  
            <Route path="/" element={<ItemListContainer/>}/> 
            <Route path="/categoria/:id" element={<ItemListContainer/>}/>
            <Route path="/macetas/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        
        </>
    )
}

export default App
