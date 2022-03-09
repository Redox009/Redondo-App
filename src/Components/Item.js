


let producto = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1000,
        imagen: "producto1.png"
    },

]
const promesa = new Promise((res,rej)=>{
    setTimeout(()=>{
        res(producto)
    },2000)
})


promesa
.then((respuestaDeLaApi)=>{
    setProductos(producto)
})
.catch((errorDeLaApi)=>{
    console.log(errorDeLaApi)
})
.finally(()=>{
    setLoading(false)
})


const Item = (producto) => {
    return (
            
                producto.map((producto)=>{
                    return (<ul>
                        <li> <a class="nombre"{...producto.nombre}  ></a></li>
                    <li> <a class="imagen"{...producto.imagen}  ></a></li>
                    </ul>
                    
                    )
                })
           
    );
            }
    export default Item 





