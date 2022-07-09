import Image from 'next/image'
import React from 'react'

const Item = ({item}: {item: {title: string, image: any, price: number}}) => {
  return (
    <li style={{
      display: 'flex',
      backgroundColor: 'white',
      borderRadius: '8px 8px 20px 8px',
      boxShadow: '4px 4px 20px #888888',
      flexDirection: 'column',
      maxWidth: '270px'
    }}>
      <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '4px 16px'}}>
        <div style={{display: 'flex', alignItems: 'center', minHeight: '100%', width: '100%', marginTop: '-24px'}}>
          <Image src={item.image} width={120} height={90} alt="Audi Car" objectFit='contain' />
        </div>
        <div style={{display: 'flex',  flexDirection: 'column', width: '100%', alignItems: 'end', justifyContent: 'space-between', marginBottom: '8px'}}>
          <div><strong>{item.title}</strong></div>
          <div style={{marginTop: '-4px', fontSize: '.85rem', fontWeight: '400'}}>2018</div>
        </div>
      </div>
      <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{ width: '100%', padding: '0px 16px' }}>
          <strong>${item.price}</strong><span style={{color: '#aaa'}}>/day</span>
        </div>
        <div style={{
    backgroundColor: '#4162e1',
    borderRadius: '20px 0px 20px 0px',
    padding: '8px 16px',
    width: '100%',
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  }}>
          Ver detalhes
        </div>
      </div>

    </li>
  )
}

export default Item