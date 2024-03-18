import Image from 'next/image'
import styles from './page.module.css'
import Scroller from './components/Scroller'
import Card from './components/Card'
import data from './data.json'
import Footer from './components/Footer'

export default function Home() {

  return (
    <div className={styles.contPrincipal}>
      <div className={styles.banner}>
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
            height={350}
            priority
            />
        </div>
        {/* <button className={styles.buttonDownloadCv}>Download CV</button> */}
      </div>

      <div className={styles.grid} id='proyectos'>
        {data.proyects.map((item , index)=>{
          return (
            <Card data={item} key={index}/>
          )
        })}
      </div>

      <div className={styles.present}>
        <p>Apasionado por el diseño y desarrollo, busco crear experiencias excepcionales y mejorar constantemente mis habilidades tecnológicas para ofrecer productos de alta calidad.</p>
      </div>

      <div className={styles.contScroller} id='conocimientos'>
        <Scroller />
      </div>
      <footer className={styles.footer} >
        <Footer />
      </footer>
    </div>
  )
}
