import Image from 'next/image'
import styles from './page.module.css'
import Scroller from './components/Scroller'
import Card from './components/Card'
import data from './data.json'
import Footer from './components/Footer'
import ButtonDownloadCV from './components/ButtonDownloadCV'

export default function Home() {

  return (
    <div className={styles.contPrincipal}>
      <div className={styles.banner}>
        <div className={styles.description}>
          <p>
            Creado por&nbsp;
            <code className={styles.code}>Dev-Chahuin</code>
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
        <ButtonDownloadCV />
        {/* <div className={styles.buttonDownloadCv}>Download CV</div> */}
      </div>

      <div className={styles.grid} id='proyectos'>
        {data.proyects.map((item , index)=>{
          return (
            <Card data={item} key={index}/>
          )
        })}
      </div>

      <div className={styles.present}>
        <p>Impulsado por la pasión por el diseño y desarrollo, mi objetivo es crear experiencias excepcionales. Me dedico a mejorar continuamente mis habilidades tecnológicas para ofrecer productos de alta calidad que satisfagan las necesidades de los usuarios.</p>
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
