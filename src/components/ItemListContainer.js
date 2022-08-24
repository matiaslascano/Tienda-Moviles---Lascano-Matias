import ItemCount from "./ItemCount";




const ItemListContainer = (props) => {

  const onAdd = (cantidad)=>{
    console.log(`Agregaste ${cantidad} unidades.`);
  }
  return (
    <>
    <h1 style={style}>{props.texto}</h1>
    <ItemCount initial={1} stock={4} onAdd={onAdd}/>

    </>
  )
}

const style = {
  color: 'blue',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
};

export default ItemListContainer