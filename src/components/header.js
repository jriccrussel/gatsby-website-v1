import React from "react"
import { Link } from "gatsby"

import headerStyles from './header.module.scss'

const Header = () => (
  <header className={headerStyles.header}>
    <h1>
      <Link className={headerStyles.title} to='/'>Russel</Link>
    </h1>

    <nav>
      <ul className={headerStyles.navList}>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/">Home</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/blog">Blog</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/about">About</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.active} to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
