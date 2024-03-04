import styles from './style.module.css'
import Image from 'next/image'
import nextConfig from '../../../next.config'
export default function LandingText({isMobile}) {
  return (
    <>
    <div className={styles.landingTextContainer}>
        <h1 className={styles.landingText}>
            next generation get your desired rank now
        </h1>
        <Image
            className={styles.landingTextImage}
            src={`${nextConfig.basePath}/images/landingtext.png`}
            width={isMobile?50:90}
            height={isMobile?50:90}
            alt='landing-text image'
        />
    </div>
    </>
  )
}
