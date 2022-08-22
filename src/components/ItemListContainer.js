


const ItemListContainer = (props) => {
  return (
    <h1 style={style}>{props.texto}</h1>
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