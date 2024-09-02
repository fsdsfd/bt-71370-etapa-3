import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

// Creando el contexto
const ProductosContext = createContext()
// Armamos el provider
const ProductosProvider = ({ children })=>{
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    console.log(url)
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)
    useEffect(() => {
        getAllProductos()
    }, [])
    console.log(helperPeticionesHttp)
    const getAllProductos = async ()=>{
        try {
           const prods = await helperPeticionesHttp(url, {})
           console.log(prods)
           setProductos(prods)
        } catch (error) {
            console.log('getAllProductos', error)
        }
    }
    const agregarProducto = async (producto) => {
        try {
           
          const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify(producto)
          }
          const dataNuevoProducto = await helperPeticionesHttp(url, options)
          console.log(dataNuevoProducto) // nuevo id
    
          const nuevoEstadoProductos = [...productos, dataNuevoProducto]
          setProductos(nuevoEstadoProductos)
    
    
        } catch (error) {
          console.error('[agregarProducto]', error)
        }
    
    
    }
    
    const editarProducto = async (productoEditado)=>{
        try {
            const options = {
                method : 'PUT',
                headers: { 'content-type': 'application/json'},
                body: JSON.stringify(productoEditado)    
            }
            const urlEditar = url + productoEditado.id
            const prods = await helperPeticionesHttp(urlEditar, options)
            console.log(prods)
            const nuevoEstadoProductos = productos.map(
                prod =>
                prod.id === prods.id? 
                prods 
                : prod
            )
            setProductos(nuevoEstadoProductos)
        } catch (error) {
            console.log('editarProducto', error)
        }

    }
    const eliminarProducto = async (id)=>{
        try {
            const options = {
                method : 'DELETE'
            }
            const urlEliminar = url + id
            const prods = await helperPeticionesHttp(urlEliminar, options)
            const dataEliminar = {
                id : id,
                producto : prods
            }
            const nuevoEstadoProductos = productos.filter(prod => (prod.id !== dataEliminar.id))
            setProductos(nuevoEstadoProductos)    
        } catch (error) {
            console.log('eliminarProducto', error)
        }

    }

    const data = {
        productos,
        productoAEditar,
        setProductoAEditar,
        agregarProducto,
        editarProducto,
        eliminarProducto
    }
    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>

}
// Exportamos el contexto
// Exporto como un objeto el provider, y como default el ProductosContext
export { ProductosProvider }
export default ProductosContext