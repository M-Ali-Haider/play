import styles from './style.module.css'
import nextConfig from '../../../next.config'
import Image from 'next/image'
export default function Socials() {
  const logos = ["twitch.png","roblox.png","chess.png","gamesradar.png"]
  return (
    <div className={styles.socialsContainer}>
        {
            logos.map((logo,i)=>{
                return <Image
                    key={i}
                    src={`${nextConfig.basePath}/images/${logo}`}
                    width={500}
                    height={500}
                    alt="socials-logo"
                />
            })
        }
    </div>
  )
}
