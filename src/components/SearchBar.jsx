import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductosContext from '../contexts/ProductosContext';
import Inicio from '../pages/Inicio';

const SearchBar = () => {
  const {productos} = useContext(ProductosContext)
  console.log(productos)
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(productos);

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    const filtered = productos.filter(prod =>
      prod.nombre.includes(value)
    );
    console.log(filtered)
    setFilteredData(filtered);
  };

  return (
    <div>
<div className="search-bar">
    <div className="search-bar__logo-container">Logo</div>
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
 
    </div>
    


  )
}

export default SearchBar