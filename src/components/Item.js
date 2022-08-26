import "./Item.css";


const Item = ({info}) => {
  return (
    <a href='' className='itemCelulares'> 
        <img src={info.imagen} alt={info.nombre} />
        <p>MODELO: {info.nombre}</p>
        <p>PRECIO: {info.precio}</p>
        <p>STOCK: {info.stock}</p>

    </a>
  )
}

export default Item