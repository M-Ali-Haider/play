import styles from './style.module.css'
import nextConfig from '../../../next.config'
import Image from 'next/image'
export default function CrownHeading({isMobile,heading}) {
  return (
    <div className={styles.crownHeading}>
        <Image 
            className={styles.crown}
            src={`${nextConfig.basePath}/images/crownheading.png`}
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
