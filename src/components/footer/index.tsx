import React from 'react'

const Footer = () => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    padding: '12px 16px',
    borderTop: '1px solid #bbb',
    width: '95%',
  }
  return (
    <footer style={{
      display: 'flex',
      alignItems: 'center',
      margin: '0 auto',
      marginTop: '12px',
      padding: '12px 16px',
      borderTop: '1px solid #bbb',
      width: '95%',
    }}>
      <div style={{textAlign: 'center', width: '100%', fontSize: '.85rem'}}>
        Exemplo de catalogo feito por &copy; Arthur Lopes
      </div>
    </footer>
  )
}

export default Footer