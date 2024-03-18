import React from 'react'
import Link from 'next/link'
import styles from './styleCard.module.css'
import Image from 'next/image'

const Card = (props) => {
    const {title, description, img, url, name} = props.data

    const truncateWords = (str, num) => {
      const truncated = str && str.length > num ? str.substring(0, num) + '...' : str;
      return truncated;
    }
  
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
          src={img}
          alt={name}
          width={500}
          height={350}
          priority
          />
          </div>
          <div className={styles.contDetail}>
            <h2>
              {title}
            </h2>
            <p>{truncateWords(description, 40)}</p>
          </div>
          <div className={styles.tags}>
            {props.data.skills.map((tag, index) => <span key={index}>{tag}</span>)}
          </div>
        </Link>
    </div>
  )
}

export default Card