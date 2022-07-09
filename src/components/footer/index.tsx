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
    <footer style={styles}>
      <div style={{textAlign: 'center', width: '100%'}}>
        Exemplo de catalogo feito por &copy; Arthur Lopes
      </div>
    </footer>
  )
}

export default Footer