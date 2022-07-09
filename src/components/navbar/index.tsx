import React, { useState } from 'react'

const Navbar = () => {
  const [category, setCategory] = useState('Tudo')

  const categories = ['Tudo', '0KM', 'Seminovos', 'Automático']
  const styles = {
    display: 'flex',
    justifyContent: 'start',
    margin: '0 auto',
    overflow: 'hidden',
    padding: '8px 0px 0px 28px',
    borderBottom: '2px solid #ddd',
    width: '95vw',
  }
  const style = {
    display: 'flex',
    textAlign: 'center',
    padding: '8px 12px',
    minWidth: '60px',
    cursor: 'pointer',
  }

  return (
    <nav style={styles}>
      {categories?.map((item: any) => (
        <div key={item} style={{display: 'flex',
        textAlign: 'center',
        padding: '8px 12px',
        minWidth: '60px',
        cursor: 'pointer', borderBottom: category === item ? '3px solid #aaa' : '', color: category === item ? 'black' : 'gray'}} onClick={() => setCategory(item)}>
          {item}
        </div>
      ))}
    </nav>
  )
}

export default Navbar