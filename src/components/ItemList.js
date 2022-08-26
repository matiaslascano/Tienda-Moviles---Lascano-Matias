import React from 'react'
import Item from './Item'

const ItemList = ({data = []}) => {
  return (
    data.map(celulares => <Item key={celulares.id} info={celulares} />)
  )
}

export default ItemList