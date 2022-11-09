import React from 'react'
import styles from '../styles/Home.module.css'
import Link from "next/link";


function Nav() {
  return (
    <div className={styles.navbar}>
          <ul>
            <Link href='/' ><a><li>Home</li></a></Link>
            <Link href='/blog'><a><li>Blog</li></a></Link>
            <Link href='/contact'><a><li>Contact</li></a></Link>
            <Link href='/about'><a><li>About</li></a></Link>
          </ul>
    </div>
  )
}

export default Nav