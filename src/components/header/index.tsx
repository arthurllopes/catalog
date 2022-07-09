import Image from 'next/image'
import React from 'react'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'


const Header = () => {
  return (
    <header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 24px', backgroundColor: '#fff'}}>
      <div>
        <Image src={logo} width={40} height={40} alt="Audi Car" objectFit='contain' />
      </div>
      <div>
      <Image src={menu} width={24} height={24} alt="Audi Car" objectFit='contain' />
      </div>
    </header>
  )
}

export default Header