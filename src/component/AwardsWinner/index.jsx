import { useState } from 'react'
import Image from 'next/image';
import styles from './style.module.css'
import nextConfig from '../../../next.config';

const patterns = [
    {
        first: "gallery1.jpg",
        second: "gallery2.jpg",
        third: "gallery3.jpg",
        fourth: "gallery4.jpg",
    },
    {
        first: "gallery2.jpg",
        second: "gallery1.jpg",
        third: "gallery4.jpg",
        fourth: "gallery3.jpg",
    },
    {
        first: "gallery3.jpg",
        second: "gallery4.jpg",
        third: "gallery1.jpg",
        fourth: "gallery2.jpg",
    },
    {
        first: "gallery4.jpg",
        second: "gallery3.jpg",
        third: "gallery2.jpg",
        fourth: "gallery1.jpg",
    },
    {
        first: "gallery2.jpg",
        second: "gallery1.jpg",
        third: "gallery3.jpg",
        fourth: "gallery4.jpg",
    }
];

export default function AwardsWinner({isMobile}) {
    const [selectedUnit,setSelectedUnit] = useState(0);
  return (
    <div className={styles.awardsContainer}>
        <div className={styles.awardsHeading}>we’re the first gaming award winners  the world</div>
        <div className={styles.awardsRest}>
            <NavBar selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit}/>

            <div className={styles.awardsGallery}>
                <div className={styles.awardsUnit}>
                    <Image className={styles.awardsImage} src={`${nextConfig.basePath}/images/${patterns[selectedUnit].first}`} width={500} height={500} alt='gallery-image'/>
                    <Image className={styles.awardsImage} src={`${nextConfig.basePath}/images/${patterns[selectedUnit].second}`} width={500} height={500} alt='gallery-image'/>
                </div>
                <div className={styles.awardsUnit}>
                    <Image className={styles.awardsImage} src={`${nextConfig.basePath}/images/${patterns[selectedUnit].third}`} width={500} height={500} alt='gallery-image'/>
                    <Image className={styles.awardsImage} src={`${nextConfig.basePath}/images/${patterns[selectedUnit].fourth}`} width={500} height={500} alt='gallery-image'/>
                    <div className={styles.stats}>
                        <div className={styles.weHave}>We’ve have many more than</div>
                        <section className={styles.bruh}>
                            <div className={styles.hundredPlus}>100+</div>
                            <div className={styles.viewMoreContainer}>
                                <Image 
                                    src={`${nextConfig.basePath}/images/playnow.svg`}
                                    width={130}
                                    height={40}
                                    alt='view-more-image'
                                />
                                <div>View More</div>
                            </div>
                        </section>
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
  