import React from 'react'

/* components */
import Header from './header'
import Footer from './footer'

import layoutStyles from './layout.module.scss'

/* scss */
import '../styles/index.scss'

const Layout = (props) => {
  return (
    <>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />        
      </div>
    </>
  )
}

export default Layout