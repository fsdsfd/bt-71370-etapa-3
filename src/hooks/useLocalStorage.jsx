import { useState } from "react"

export const useLocalStorage = ( clave, valorInicial = []) => {
    const getValorAlmacenado = ()=>{
        try {
            const valorAlmacenado = window.localStorage.getItem(clave)
            return valorAlmacenado ? JSON.parse(valorAlmacenado) : valorInicial
        } catch (error) {
            console.log(`Error al obtener ${clave} del localStorage ${error}`)
            return valorInicial
        }
    }
    const [valorAlmacenado, setValorAlmacenado] = useState(getValorAlmacenado())
    // Con este useState se ejecuta la función que retorna los datos del localStorage, o un array vacio
    const guardarValor = (valorNuevo)=>{
        try {
            const nuevoValorAlmacenado = [...valorAlmacenado, valorNuevo]
            setValorAlmacenado(nuevoValorAlmacenado)
                                    //   name :  value 
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
        } catch (error) {
            console.log(`Error al guardar ${clave} del localStorage ${error}`)     
        }
    }
    const eliminarValor =(id) =>{
        try {
            const nuevoValorAlmacenado = [...valorAlmacenado]
            const indice = nuevoValorAlmacenado.findIndex(item => item.id === id) // Busco el indice del producto dentro del array clonado
            nuevoValorAlmacenado.splice(indice, 1) // Busco adentro del array clonado el producto y lo borro
            console.log(nuevoValorAlmacenado) // Acá tengo todo el array sin el producto eliminado
            setValorAlmacenado(nuevoValorAlmacenado)
            window.localStorage.setItem(clave, JSON.stringify(nuevoValorAlmacenado))
    
        } catch (error) {
            console.log(`'Error al eliminar' ${clave} del localStorage con el id : ${id}, ${error}`)
        }
    }
    const limpiarValores = ()=>{
        window.localStorage.clear()
        window.localStorage.setItem(clave, JSON.stringify(valorInicial))
        setValorAlmacenado(valorInicial)
    }
    return [guardarValor, eliminarValor, limpiarValores, valorAlmacenado]

}

