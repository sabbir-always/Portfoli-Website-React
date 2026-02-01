import React from 'react'
import HeaderComponents from '../components/layouts/HeaderComponents'
import FooterComponents from '../components/layouts/FooterComponents'

const WebLayouts = ({ children }) => {
  return (
    <>
      <header>
        <HeaderComponents />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <FooterComponents />
      </footer>
    </>
  )
}

export default WebLayouts