import React from 'react'
import Item from '../item'
import audi from '../../assets/audi.png'
import land from '../../assets/land.png'
import merce from '../../assets/merce.png'
import volk from '../../assets/volk.png'
import tesla from '../../assets/tesla.png'


const List = () => {
  const data = [
    {title: 'Audi X5', image: audi, price: 180},
    {title: 'Tesla Model X', image: tesla, price: 320},
    {title: 'Land River', image: land, price: 220},
    {title: 'Volkswagen', image: volk, price: 90},
    {title: 'Mercedes', image: merce, price: 140},
  ]
  const styles = {
    display: 'grid',
    gridTemplateRow: '1fr',
    gap: '22px',
    paddingTop: '16px',
    width: '100%',
    justifyContent: 'center',
  }
  return (
    <div style={styles}>
      {data.map((item) => (
        <Item key={item.title} item={item} />
      ))}
    </div>
  )
}

export default List