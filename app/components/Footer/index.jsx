import React from 'react'
import classes from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div id="contacto" >
          <div className={classes.footer}>
            <h2>Contáctos</h2>
            <p>Si tienes alguna duda o sugerencia, no dudes en contactarme.</p>
            <div className={classes.infoContact} > 
              <Image src={'/images/social/mail.png'} height={20} width={20} alt='socialMail' />
              <p>chahuincc@gmail.com</p>
            </div>
            <div className={classes.infoContact}>
              <Image src={'/images/social/whatsapp.png'} height={20} width={20} alt='socialWhatsapp'/>
              <p>+541125599997</p>
            </div>
            <div className={classes.infoContact}>
              <Image src={'/images/social/placeholder.png'} height={20} width={20} alt='socialPlaceholder'/>
              <p>Argentina - Buenos Aires</p>
            </div>
          </div>
          <div className={classes.finFooter} >
              <p>© 2023 - Todos los derechos reservados</p>
              <p>creado por dev-chahuin</p>
          </div>
        </div>
      )
}

export default Footer