import styles from './style.module.css'
import Image from 'next/image'
import nextConfig from '../../../next.config'
export default function Cards({isMobile}) {

    const imagePaths= isMobile?["card1.png"]:["card1.png","card2.png","card3.png"];
  return (
    <div className={styles.cardsContainer}>
        {
            imagePaths.map((imagePath,index)=>{
                return <div key={index} className={styles.card} style={{width:349,height:412}}>
                    <Image 
                        className={styles.cardImage} 
                        src={`${nextConfig.basePath}/images/${imagePath}`} 
                        width={349}
                        height={412}
                        alt="card image"
                    />
                    <div className={styles.playNow}>
                        <div className={styles.playNowHelper}>
                            <Image 
                                src={`${nextConfig.basePath}/images/cardVector.png`}
                                className={styles.cardVector}
                                width={283}
                                height={56}
                                alt='card-vector-image'
                            />
                            <div className={styles.playNowHeading}>Play now</div>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
  )
}

{/*  */}
