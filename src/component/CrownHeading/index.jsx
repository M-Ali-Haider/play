import styles from './style.module.css'
import nextConfig from '../../../next.config'
import Image from 'next/image'

import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({subsets:["latin"],weight:["400"]});

export default function CrownHeading({isMobile,heading}) {
  return (
    <div className={`${bebas.className} ${styles.crownHeading}`}>
        <Image 
            className={styles.crown}
            src={`${nextConfig.basePath}/images/crownsvg.svg`}
            width={80}
            height={80}
            alt={"crown image"}
        />
        <h1 className={styles.heading}>
            {heading}
        </h1>
    </div>
  )
}
