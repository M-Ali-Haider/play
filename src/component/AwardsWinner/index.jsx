import { useState } from 'react'
import Image from 'next/image';
import styles from './style.module.css'
import nextConfig from '../../../next.config';
export default function AwardsWinner({isMobile}) {
    const [selectedUnit,setSelectedUnit] = useState(0);
  return (
    <div className={styles.awardsContainer}>
        <div className={styles.awardsHeading}>we’re the first gaming award winners  the world</div>
        <div className={styles.awardsRest}>
            <NavBar selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit}/>
            <div className={styles.awardsGallery}>
                <div className={styles.awardsUnit}>
                    <Image className={styles.awardsImage} src={`${nextConfig.basePath}/images/gallery1.jpg`} width={500} height={500} alt='gallery-image'/>
                    <Image className={styles.awardsImage} src={`${nextConfig.basePath}/images/gallery2.jpg`} width={500} height={500} alt='gallery-image'/>
                </div>
                <div className={styles.awardsUnit}>
                    <Image className={styles.awardsImage} src={`${nextConfig.basePath}/images/gallery3.jpg`} width={500} height={500} alt='gallery-image'/>
                    <Image className={styles.awardsImage} src={`${nextConfig.basePath}/images/gallery4.jpg`} width={500} height={500} alt='gallery-image'/>
                    <div className={styles.stats}>
                        <div className={styles.weHave}>We’ve have many more than</div>
                        <div className={styles.hundredPlus}>100 +</div>
                        <p className={styles.gamingCollections}>Gaming <span>Collections</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


function NavBar({selectedUnit,setSelectedUnit}) {
    const options = ["Adventure","Arcade","Arena","Avoider","Balance"];
  return (<div className={styles.awardsNavbar}>
        {
            options.map((option,index)=>{
                return <div 
                    key={index}
                    className={selectedUnit === index ? `${styles.awardsNavbarActivated} ${styles.awardsNavbarUnit}` : styles.awardsNavbarUnit}
                    onClick={()=>{setSelectedUnit(index)}}
                >
                    {option}
                </div>
            })
        }
    </div>);
}
  