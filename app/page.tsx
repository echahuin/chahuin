import Image from 'next/image'
import styles from './page.module.css'
import Scroller from './components/Scroller'
import Card from './components/Card'
import data from './data.json'

export default function Home() {
  return (
    <div className={styles.contPrincipal}>
      <div className={styles.description}>
        <p>
          Frontend developer&nbsp;
          <code className={styles.code}>dev-chahuin</code>
        </p>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/devLogo.svg"
          alt="devLogo Logo"
          width={450}
          height={550}
          priority
        />
      </div>
      <div className={styles.grid} id='proyectos'>
        {data.proyects.map((item , index)=>{
          return (
            <Card data={item} key={index}/>
          )
        })}
      </div>
      <div className={styles.contScroller} id='conocimientos'>
        <Scroller />
      </div>
      <footer className={styles.footer} >
      </footer>
    </div>
  )
}
