import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductosContext from '../contexts/ProductosContext';
import './SearchBar.scss'
const SearchBar = () => {
  const {productos} = useContext(ProductosContext)
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(productos);

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    const filtered = productos.filter(prod =>
      prod.nombre.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filtered)
    setFilteredData(filtered);
  };
  return (
<div>
<div className="search-bar">
    <div className="search-bar__logo-container">
    <img src="/img/Qui-videt-logo.png" alt="Qui Videt" className='search-bar__logo' />
    </div>
    <form action="#" className="search-bar__form-container">
      <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
      <input type="text"
      className="search-bar__form-search" 
      onChange={handleChange} 
      value={query}/>
       <button type='submit' className="search-bar__form-submit"/>
    </form>
    <div className="search-bar__carrito-container">
    <Link to="/carrito">
    <img src="/img/svg-icons/cart.svg" alt="carrito de compras" className="search-bar__carrito-container__icon" />
    </Link>
    </div>
    <div className="menu-toogle">
      <label htmlFor="menu" className="menu-toogle__label">
        <span className="menu-toogle__top-bread"></span>
        <span className="menu-toogle__meat"></span>
        <span className="menu-toogle__bottom-bread"></span>
      </label>
    </div>
  </div>
  <div className='div-searchBar'>
  {
      filteredData  ? filteredData.map((producto)=>(
          <Link className='ul-searchBar__boton' to={`/detalle-producto/${producto.id}`}>
          <ul className='ul-searchBar' key={producto.id}>
          <li className='ul-searchBar__li'>{producto.nombre}</li>
          </ul>

          </Link>
      ))
      : <div></div>
    }
  </div>
  <header className="section-cards__header">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        </header>
    </div>
    


  )
}

export default SearchBar