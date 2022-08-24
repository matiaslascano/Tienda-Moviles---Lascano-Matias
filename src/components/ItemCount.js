import './ItemCount.css';

import React, { useEffect, useState } from 'react'

export const ItemCount = ({initial, stock, onAdd}) => {

    const [contador, setContador] = useState(parseInt(initial));

    const restar = ()=>{
        setContador(contador - 1);
    };
    const sumar = ()=>{
        setContador(contador + 1);
    };
    useEffect(()=>{
        setContador(parseInt(initial));
    }, [initial])

  return (
   <div className='contador'>
    <button className='botonSumaResta' disabled={ contador <=1 } onClick={restar}>-</button>
    <span>{contador}</span>
    <button className='botonSumaResta' disabled={ contador >= stock } onClick={sumar}>+</button>
    <button className='botonAgregarCarrito' disabled={ stock <= 0} onClick={()=> onAdd(contador)}>Agregar al Carrito</button>
   </div>
  );
}

export default ItemCount;