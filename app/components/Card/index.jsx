import React from 'react'
import Link from 'next/link'
import styles from './styleCard.module.css'
import Image from 'next/image'

const Card = (props) => {
    const {title, description, tags, img, url} = props.data
    console.log(props.data)
  return (
      <div className={styles.card}>
        
         <Link
 href={url}
target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.contImg}>

          <Image
          className={styles.logo}
          src={"/tamboInkaScreen.png"}
          alt="tamboInkaScreen"
          width={500}
          height={350}
          priority
          />
          </div>
          <h2>
            {title}
          </h2>
          <p>{description}</p>
          <div className={styles.tags}>
            <span>css</span>
            <span>Next.js</span>
            <span>node.js</span>
          </div>
        </Link>
    </div>
  )
}

export default Card