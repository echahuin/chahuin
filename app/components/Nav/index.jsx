import React from 'react'
import Link from 'next/link'
import classes from './styleNav.module.css'

function nav() {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <Link href="/"> Dev-chahuin </Link>
      </div>
      <div className={classes.items}>
        <ul>
          <li>
            <Link href="#conocimientos">Conocimientos</Link>
          </li>
          <li>
            <Link href="#proyectos">Proyectos</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default nav