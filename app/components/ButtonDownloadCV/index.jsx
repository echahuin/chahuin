'use client'
import React from 'react'
import styles from './style.module.css'
import { gsReference } from "@/firebase/config"
import { getDownloadURL } from "firebase/storage";
import { useRouter } from 'next/navigation'


const ButtonDownloadCV = () => {
    const router = useRouter()
    const getDoc =  async () => {

        try {
            const url = await getDownloadURL(gsReference)
            router.push(url)
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <button className={styles.buttonDownloadCv} onClick={()=>getDoc()}>
            <span>Download CV</span>
        </button>
    )

}

export default ButtonDownloadCV